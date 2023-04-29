import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product [];
  productDelete: Product = undefined;


  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.productService.findAll().subscribe(next => {
      this.products = next;
    });
  }


  getProductDelete(product: Product) {
    this.productDelete = product;
  }

  deleteProduct() {
    this.productService.delete(this.productDelete.id).subscribe(next => {
    }, error => {
    }, () => {
      this.productService.findAll().subscribe(next => {
        this.products = next;
      });
    });
  }
}
