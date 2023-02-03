import { Component, OnInit } from '@angular/core';
import { ProductsModel } from "src/app/models/products"
import { ProductService } from "../../services/products.service"
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-product-by-id',
  templateUrl: './product-by-id.component.html',
  styleUrls: ['./product-by-id.component.css'],
  providers: [ProductService]
})
export class ProductByIdComponent implements OnInit {

  public productById!: ProductsModel

  constructor(private _productService: ProductService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this._route.params.subscribe(
      params => {
        let id = params['id']
        this._productService.getProductById(id).subscribe(
          response => {
            if (response) {
              this.productById = response;
              this.productById.image = this.productById.image.replace("SL75", "SL450")
            }
          },
          error => {
            this._router.navigate(['/store'])
          }
        )
      }
    )
  }
}
