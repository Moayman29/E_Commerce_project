import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
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

  goToCategory(id:any){
    this._router.navigate(['/categories', id]);
  }
}
