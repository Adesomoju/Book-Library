import { Component, OnInit } from '@angular/core';
import { Book } from '../../../model/Book';
import { ModalsService } from '../../../services/modals/modals.service';
import { ApiService } from '../../../services/api/api.service';
import { Router } from '@angular/router';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandlerService } from '../../../services/error-handler/error-handler.service';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categories: Book
  isLoading: boolean = false
  errorMessage: string = '';
  durationInSeconds = 8;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  parsedName: string

  constructor(
    private modalService: ModalsService,
    private apiService: ApiService,
    public router: Router,
    private snackBar: MatSnackBar,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit(): void {
    this.getCategory();
  }

  back() {
    this.router.navigate(['/books/book-home'])
  }

  addNewCat() {
    this.modalService.AddCategory()
      .subscribe(
        async (res: any) => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      )
  }

  deleteCat(category) {
    const data = {
      message: `Are you sure you want to delete (${category.name}) ?`,
      btn1: 'No',
      btn2: 'Yes'
    };
    this.modalService.Alert(data)
      .subscribe(
        async (res: any) => {
          console.log(res);
          if (res && res.data && res.data === 2) {
            this.doDelete(category)
          }
        }, async error => {
          console.log(error);
        }
      )
  }

  editCat(category) {
    const data = {
      heading: `Edit this Category: (${category.name})?`,
      btn1: 'Submit',
    };
    this.modalService.EditCategory(data)
      .subscribe(
        async (res: any) => {
          if (res && res.data && res.data === 1) {
            this.parsedName = res.name;
            this.doEdit(category);
          }
        },async error => {
          console.log(error);
        }
      )
  }

  async getCategory() {
    this.apiService.get(`categories/`)
      .subscribe(
        async (res: Book) => {
          console.log(res);
          this.categories = res;
          this.isLoading = true;
        }, async error => {
          console.log(error)
        }
      )
  }

  async doDelete(category) {
    await this.apiService.delete(`${category.id}`)
      .subscribe(async (res) => {
        await this.snackBar.open(`(${category.name}), has been deleted successfully`, 'close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: this.durationInSeconds * 1000,
        });
        location.reload();
      }), async (error) => {
        throw error;
      }
  }

  async doEdit(category) {
   const payload = {
      name: this.parsedName,
    };
    console.log(payload)
    await this.apiService.put(`${category.id}`, payload)
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



