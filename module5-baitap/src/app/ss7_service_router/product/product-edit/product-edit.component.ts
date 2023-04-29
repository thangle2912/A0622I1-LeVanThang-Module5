import {Component, OnInit} from '@angular/core';
import {ProductService} from '../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  rfProduct: FormGroup;
  productUpdate: Product;
  id: number;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = +paramMap.get('id');
    });
    this.productService.findById(this.id).subscribe(next => {
      this.productUpdate = next;
      this.rfProduct = new FormGroup({
        name: new FormControl(this.productUpdate.name, []),
        price: new FormControl(this.productUpdate.price, []),
        description: new FormControl(this.productUpdate.description, []),
      });
    });
  }

  editProduct() {
    this.productService.update(this.id, {...this.rfProduct.value, id: this.id}).subscribe(next => {
      this.router.navigateByUrl('/product');
    }, error => {
    }, () => {
    });
  }
}
