import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  category$;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.category$ = this.categoryService.getCategories().valueChanges();
    console.log(this.category$);
  }

}
