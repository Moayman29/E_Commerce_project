import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { SubcategoriesService } from 'src/app/services/subcategories/subcategories.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit{
  categoryDetails:any= null;
  subcategories:any[]= [];

  constructor(private _categoriesServ:CategoriesService,private _subcategoriesServ:SubcategoriesService ,private _activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe({
      next:(data)=>{
        console.log(data.get('id'));
        this._categoriesServ.getCategoryDetails(data.get('id')).subscribe({
          next:(data)=>{
            console.log(data);
            this.categoryDetails=data.data;
          }
        });
        this._subcategoriesServ.getAllSubcategories(data.get('id')).subscribe({
          next:(data)=>{
            console.log(data);
            this.subcategories=data.data;
          }
        })
      },
      error:(error)=>{
        console.log(error);
        
      }
    })
  }

}
