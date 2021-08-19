import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books.component';
import { BookListComponent } from './book-list/book-list.component';
import { FavouriteBooksComponent } from './favourite-books/favourite-books.component';
import { BookHomeComponent } from './book-home/book-home.component';


const routes: Routes = [
    {
        path: '',
        component: BooksComponent,
        children: [
            { 
                path: '',
                redirectTo: 'book-home',
                pathMatch: 'full'
            },
            {
                path: 'book-home',
                component: BookHomeComponent
            },
            {
                path: 'book-list',
                component: BookListComponent
            },
            {
                path: 'favourite-books',
                component: FavouriteBooksComponent
            },
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
