import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryComponent } from './category.component';


const routes: Routes = [
    {
        path: '',
        component: CategoryComponent,
        children: [
            { 
                path: '',
                redirectTo: 'book-category',
                pathMatch: 'full'
            },
            {
                path: 'book-category',
                component: CategoryListComponent
            }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
