import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatInputModule } from '@angular/material/input';
import { AlertComponent } from './alert/alert.component';
import { RouterModule } from '@angular/router';
import { EditCopyComponent } from './edit-copy/edit-copy.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';


@NgModule({
  exports: [
    AlertComponent
  ],
  declarations: [ 
    AlertComponent, EditCopyComponent, EditCategoryComponent 
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,  
    NgxSkeletonLoaderModule,
   
  ]
})
export class ComponentModule { }
