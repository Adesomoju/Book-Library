import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ApiService } from '../../../services/api/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from '../../../model/Book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  durationInSeconds = 8;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  addCatForm!: FormGroup;
  book: Book
  favourite: boolean = false


  constructor(
    public dialogRef: MatDialogRef<AddCategoryComponent>,
    private formBuilder: FormBuilder,
    private api: ApiService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.addCatForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      isFavorite: [false, [Validators.required]],
    });
    this.getCategory()
  }

  modalResponse() {
    this.dialogRef.close();
  }

  async getCategory() {
    this.api.get(`categories/`)
      .subscribe(
        async (res: Book) => {
          console.log(res);
        }, async error => {
          console.log(error)
        }
      )
  }

  async addCategory() {
    if (this.addCatForm.value.isFavorite === 'true') {
      this.favourite = true;
    } else {
      this.favourite = false;
    };

    let payload = {
      name: this.addCatForm.value.name,
      isFavorite: this.favourite
    };
    console.log(payload);
    await this.api.post(`categories/`, payload)
      .subscribe(
        async (res: Book) => {
          await this.snackBar.open('New Book Category has been added', 'close', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: this.durationInSeconds * 1000,
          });
          await this.modalResponse();
          await this.getCategory();
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


