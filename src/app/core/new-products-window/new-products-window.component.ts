import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'tp-new-products-window',
  templateUrl: './new-products-window.component.html',
  styleUrls: ['./new-products-window.component.scss']
})
export class NewProductsWindowComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<NewProductsWindowComponent>) { }

  ngOnInit() {
  }

}
