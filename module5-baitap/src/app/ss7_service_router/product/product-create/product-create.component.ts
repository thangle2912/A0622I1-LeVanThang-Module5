import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
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
    this.rfProduct = new FormGroup({
      name: new FormControl('', []),
      price: new FormControl('', []),
      description: new FormControl('', []),
    });
  }

  addProduct() {
    this.productService.save(this.rfProduct.value).subscribe(next => {
      this.router.navigateByUrl('/product');
    }, error => {
    }, () => {});
  }
}
