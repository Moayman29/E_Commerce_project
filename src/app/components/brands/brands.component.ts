import { Component, OnInit } from '@angular/core';
import { BrandsService } from 'src/app/services/brands/brands.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit{
  brandsArr:any[]= [];
  p:number= 1;
  collectionArr:any=null;
  limit:any=null;

  constructor(private _brandsServ:BrandsService,private _router:Router){}

  ngOnInit(): void {
    this._brandsServ.getAllBrands(this.p).subscribe({
      next:(data)=>{
        console.log(data);
        this.collectionArr=data;
        this.brandsArr=data.data;
        this.p=data.metadata.currentPage;
        this.limit=data.metadata.limit;
      },
      error:(error)=>{
        console.log(error);
        
      }
    })
  }

  getPage(page:any){
    console.log(page);
    
    this._brandsServ.getAllBrands(page).subscribe({
      next:(data)=>{
        console.log(data);
        this.collectionArr=data;
        this.brandsArr=data.data;
        this.p=data.metadata.currentPage;
        this.limit=data.metadata.limit;
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }

  goToBrand(id:any){
    this._router.navigate(['/brands', id])
  }
  
}
