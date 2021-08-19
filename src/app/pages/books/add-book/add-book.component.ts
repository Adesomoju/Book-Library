import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api/api.service';
import { Book } from '../../../model/Book';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  durationInSeconds = 8;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  addBookForm!: FormGroup;
  book: Book
  favourite: boolean = false



  constructor(
    public dialogRef: MatDialogRef<AddBookComponent>,
    private formBuilder: FormBuilder,
    private api: ApiService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.addBookForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      isFvorite: [false, [Validators.required]],
    });
    this.getBooks();
  }

  modalResponse() {
    this.dialogRef.close();
  }

  async getBooks() {
    this.api.get(`books/`)
      .subscribe(
        async (res: Book) => {
          console.log(res);
        }, async error => {
          console.log(error)
        }
      )
  }

  async addBook() {
    if (this.addBookForm.value.isFvorite === 'true') {
      this.favourite = true;
    } else {
      this.favourite = false;
    }
    let payload = {
      name: this.addBookForm.value.name,
      isFvorite: this.favourite
    }
    await this.api.post(`books/`, payload)
      .subscribe(
        async (res: Book) => {
          await this.snackBar.open('New Book has been added', 'close', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: this.durationInSeconds * 1000,
          });
          await this.modalResponse();
          await this.getBooks();
          location.reload();
        }, async error => {
          await this.snackBar.open('Ooops something went wrong', 'close', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: this.durationInSeconds * 1000,
          });
          await this.modalResponse();
        }
      )
  }

}
