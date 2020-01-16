import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  category$;

  constructor(private categoryService: CategoryService, private productService: ProductService,
    private router: Router) {
  }

  ngOnInit() {
    this.category$ = this.categoryService.getCategories().valueChanges();
    console.log(this.category$);
  }
  save(form) {
    console.log(form);
    this.productService.create(form);
    this.router.navigate(['/admin/products']);
  }

}
