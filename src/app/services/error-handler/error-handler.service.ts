import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  public errorMessage: string = '';
  durationInSeconds = 0.5;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private snackBar: MatSnackBar) { }

  handleError(error: any) {
    if (error instanceof HttpErrorResponse) {
      console.error('Backend returned status code: ', error.status);
      this.snackBar.open(`ERROR ${error.status}, Oops something went wrong `, 'close', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: this.durationInSeconds * 1000,
      });
      console.error('Response body:', error.message);
    } else {
      console.error('An error occurred:', error.message);
    }
  }


}
