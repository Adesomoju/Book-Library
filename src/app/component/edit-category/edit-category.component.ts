import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {
  name: any
  data: any;

  constructor(
    public dialogRef: MatDialogRef<EditCategoryComponent>,
  ) { }

  ngOnInit(): void {
  }

  modalResponse(val?, val2?){
		this.dialogRef.close({data: val, name: val2});
	}

}
