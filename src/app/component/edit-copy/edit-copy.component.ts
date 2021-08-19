import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-copy',
  templateUrl: './edit-copy.component.html',
  styleUrls: ['./edit-copy.component.scss']
})
export class EditCopyComponent implements OnInit {
  name: any
  data: any;
  fav: any

  constructor(
    public dialogRef: MatDialogRef<EditCopyComponent>,
  ) { }

  ngOnInit(): void {
  }

  modalResponse(val?, val2?, val3?){
		this.dialogRef.close({data: val, name: val2, fav: val3});
	}

}
