import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ProductService} from '../service/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  rfProduct: FormGroup;

  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.rfProduct = new FormGroup({});
  }

  addProduct() {
    debugger
    console.log(this.rfProduct.value);
    this.productService.save(this.rfProduct.value);

    this.router.navigateByUrl('/product');
  }
}
