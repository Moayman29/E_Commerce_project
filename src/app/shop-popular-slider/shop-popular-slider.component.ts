import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from '../categories.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-shop-popular-slider',
  templateUrl: './shop-popular-slider.component.html',
  styleUrls: ['./shop-popular-slider.component.css']
})
export class ShopPopularSliderComponent {

  catergoriesArr:any[] = []

  constructor(private _categoriesServ: CategoriesService,private _router:Router){}

  ngOnInit(): void {
    this._categoriesServ.getAllCategories().subscribe({
      next:(data)=>{
        console.log(data);
        this.catergoriesArr = data.data
      },
      error:(error)=>{
        console.log(error);
        
      }
    })
  }

  customOptions: OwlOptions = {
    autoplay: true,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 3
      },
      400: {
        items: 3
      },
      740: {
        items: 5
      },
      940: {
        items: 7
      }
    },
    nav: true
  }
}
