import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../brands.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brand-details',
  templateUrl: './brand-details.component.html',
  styleUrls: ['./brand-details.component.css']
})
export class BrandDetailsComponent implements OnInit{
  brandDetails:any= null;
  constructor(private _brandsServ:BrandsService, private _activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe({
      next:(data)=>{
        console.log(data.get('id'));
        this._brandsServ.getSpecificBrand(data.get('id')).subscribe({
          next:(data)=>{
            console.log(data);
            this.brandDetails=data.data;
          },
          error:(error)=>{
            console.log(error);
          }
        })
      }
    })
  }
}
