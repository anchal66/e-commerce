import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  product$;
  product2$;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.product$ = this.productService.getall();
    this.productService.getall().subscribe(p => {
      console.log(p);
      this.product2$ = p;
      console.log(this.product2$);
      console.log(this.product2$.$key);
    });
  }

}
