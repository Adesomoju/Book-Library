import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooksComponent } from './books.component';
import { FavouriteBooksComponent } from './favourite-books/favourite-books.component';
import { BookListComponent } from './book-list/book-list.component';
import { BooksRoutingModule } from './books-routing.module';
import { BookHomeComponent } from './book-home/book-home.component';
import { AddBookComponent } from './add-book/add-book.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ComponentModule } from '../../component/component.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatSnackBarModule } from '@angular/material/snack-bar'; 


@NgModule({
    declarations: [BooksComponent, BookListComponent, FavouriteBooksComponent, BookHomeComponent, AddBookComponent],
    imports: [
      CommonModule,
      ComponentModule,
      ReactiveFormsModule,
      BooksRoutingModule,
      FormsModule,
      MatIconModule,
      MatDialogModule,
      NgxSkeletonLoaderModule,
      MatSnackBarModule
    ],
    providers: []
  })
  export class BooksModule { }
  
  