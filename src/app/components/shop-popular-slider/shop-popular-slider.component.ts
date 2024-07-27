import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CategoriesService } from 'src/app/services/categories/categories.service';

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
        items: 2
      },
      500: {
        items: 3
      },
      650: {
        items: 4
      },
      800:{
        items: 5
      },
      980: {
        items: 6
      },
      1300:{
        items: 7
      }
    },
    nav: true
  }
}
