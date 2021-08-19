import { Component, OnInit } from '@angular/core';
import { ModalsService } from '../../../services/modals/modals.service';
import { ApiService } from '../../../services/api/api.service';
import { Book } from '../../../model/Book';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Book
  isLoading: boolean = false
  durationInSeconds = 8;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  parsedName: string
  parsedFav: string
  favourite: boolean = false

  constructor(
    private modalService: ModalsService,
    private apiService: ApiService,
    public router: Router,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.getBooks()
  }

  back() {
    this.router.navigate(['/books/book-home'])
  }

  addNewBook() {
    this.modalService.AddBook()
      .subscribe(
        async (res: any) => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      )
  }

  deleteBook(book) {
    const data = {
      message: `Are you sure you want to delete (${book.name}) ?`,
      btn1: 'No',
      btn2: 'Yes'
    };
    this.modalService.Alert(data)
      .subscribe(
        async (res: any) => {
          console.log(res);
          if (res && res.data && res.data === 2) {
            this.doDelete(book)
          }
        }, async error => {
          console.log(error);
        }
      )
  }

  editBook(book) {
    const data = {
      heading: `Edit this book: (${book.name})?`,
      btn1: 'Submit',
    };
    this.modalService.EditCopy(data)
      .subscribe(
        async (res: any) => {
          if (res && res.data && res.data === 2) {
            this.parsedName = res.name;
            this.parsedFav = res.fav;
            this.doEdit(book);
          }
        }, async error => {
          console.log(error);
        }
      )
  }

  async getBooks() {
    this.apiService.get(`books/`)
      .subscribe(
        async (res: Book) => {
          console.log(res);
          this.books = res;
          this.isLoading = true;
        }, async error => {
          console.log(error)
        }
      )
  }

  async doDelete(book) {
    await this.apiService.delete(`${book.id}`)
      .subscribe(async (res) => {
        await this.snackBar.open(`(${book.name}), has been deleted successfully`, 'close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: this.durationInSeconds * 1000,
        });
        location.reload();
      }), async (error) => {
        console.error(error)
      }
  }

  async doEdit(book) {
    if (this.parsedFav === 'true') {
      this.favourite = true;
    } else {
      this.favourite = false;
    };

    const payload = {
      name: this.parsedName,
      isFavorite: this.favourite
    };
    console.log(payload)
    await this.apiService.put(`${book.id}`, payload)
      .subscribe(async (res) => {
        await this.snackBar.open('changed Successfully', 'close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: this.durationInSeconds * 1000,
        });
        location.reload();
      }), async (error) => {
        console.error(error)
      }
  }

}
