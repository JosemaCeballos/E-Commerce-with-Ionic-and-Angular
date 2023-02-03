import { Component, OnInit } from '@angular/core';
import {ProductsModel} from "src/app/models/products"
import {ProductService} from "../../services/products.service"

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
  providers: [ProductService]
})
export class StoreComponent implements OnInit {
  public allProducts!: any;

  constructor(private _productService: ProductService) {}

  ngOnInit (){
    this._productService.getProducts().subscribe(
      response => {
          this.allProducts = response;
      }
    )
  }
}
