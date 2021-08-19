import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api/api.service';
import { Book } from '../../../model/Book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourite-books',
  templateUrl: './favourite-books.component.html',
  styleUrls: ['./favourite-books.component.scss']
})
export class FavouriteBooksComponent implements OnInit {
  books: Book
  isLoading: boolean =  false

  constructor(
    private apiService: ApiService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.getBooks();
  }

  back() {
    this.router.navigate(['/books/book-home'])
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

}
