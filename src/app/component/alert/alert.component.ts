import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  data: any;

  constructor(
    public dialogRef: MatDialogRef<AlertComponent>,
  ) { }

  ngOnInit(): void {
  }
  
  modalResponse(val?: any){
		this.dialogRef.close({data: val});
	}

}
