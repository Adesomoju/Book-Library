import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryRoutingModule } from './category-routing.module';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ComponentModule } from '../../component/component.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
    declarations: [CategoryComponent, CategoryListComponent, AddCategoryComponent],
    imports: [
      CommonModule,
      ComponentModule,
      ReactiveFormsModule,
      CategoryRoutingModule,
      FormsModule,
      MatIconModule,
      MatDialogModule,
      NgxSkeletonLoaderModule,
      MatSnackBarModule
    ],
    providers: []
  })
  export class CategoryModule { }
  