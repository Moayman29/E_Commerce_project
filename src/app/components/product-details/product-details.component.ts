import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  private _productServ= inject(ProductService)
  private _activatedRoute= inject(ActivatedRoute)
  productDetails:any = null;

  ngOnInit(): void {
   this._activatedRoute.paramMap.subscribe({
      next:(data)=>{
        console.log(data.get('id'));
        this._productServ.getProductDetails(data.get('id')).subscribe({
          next:(data)=>{
            this.productDetails= data.data;
          }
        })
        
      }
    })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    nav: true,
    items:1
  }
}
