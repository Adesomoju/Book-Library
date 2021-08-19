import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddCategoryComponent } from '../../pages/category/add-category/add-category.component';
import { AddBookComponent } from '../../pages/books/add-book/add-book.component';
import { AlertComponent } from '../../component/alert/alert.component';
import { EditCopyComponent } from '../../component/edit-copy/edit-copy.component';
import { EditCategoryComponent } from '../../component/edit-category/edit-category.component';


@Injectable({
	providedIn: 'root'
})
export class ModalsService {

	constructor(private matDialog: MatDialog) { }


	Alert(data: any) {
		let dialogRef: MatDialogRef<AlertComponent>;
		dialogRef = this.matDialog.open(AlertComponent);
		dialogRef.componentInstance.data = data;
		dialogRef.updateSize('350px');
		dialogRef.addPanelClass([]);
		return dialogRef.afterClosed();
	}

	EditCopy(data: any) {
		let dialogRef: MatDialogRef<EditCopyComponent>;
		dialogRef = this.matDialog.open(EditCopyComponent);
		dialogRef.componentInstance.data = data;
		dialogRef.updateSize('350px');
		dialogRef.addPanelClass([]);
		return dialogRef.afterClosed();
	}

	EditCategory(data: any) {
		let dialogRef: MatDialogRef<EditCategoryComponent>;
		dialogRef = this.matDialog.open(EditCategoryComponent);
		dialogRef.componentInstance.data = data;
		dialogRef.updateSize('350px');
		dialogRef.addPanelClass([]);
		return dialogRef.afterClosed();
	}

	AddBook() {
		let dialogRef: MatDialogRef<AddBookComponent>;
		dialogRef = this.matDialog.open(AddBookComponent);
		dialogRef.updateSize('450px');
		dialogRef.addPanelClass([]);
		return dialogRef.afterClosed();
	}

	AddCategory() {
		let dialogRef: MatDialogRef<AddCategoryComponent>;
		dialogRef = this.matDialog.open(AddCategoryComponent);
		dialogRef.updateSize('350px');
		dialogRef.addPanelClass([]);
		return dialogRef.afterClosed();
	}

}
