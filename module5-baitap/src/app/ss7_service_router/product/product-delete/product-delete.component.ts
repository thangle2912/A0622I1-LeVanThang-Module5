import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  deleteProduct(productDelete: Product) {

  }
}
