import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/index';

@Component({
  selector: 'tp-new-products-item',
  templateUrl: './new-products-item.component.html',
  styleUrls: ['./new-products-item.component.scss']
})
export class NewProductsItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
