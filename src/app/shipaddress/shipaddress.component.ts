import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-shipaddress',
  templateUrl: './shipaddress.component.html',
  styleUrls: ['./shipaddress.component.css']
})
export class ShipaddressComponent implements OnInit {
  cartId :any = null;
  constructor(private _activeRouter: ActivatedRoute, private _orders:OrdersService){}
  
  addressForm: FormGroup = new FormGroup({
    details: new FormControl('',[Validators.required,Validators.minLength(2)]),
    phone: new FormControl('',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
    city: new FormControl('',[Validators.required,Validators.minLength(2)]),
  })

  ngOnInit(): void {
      this._activeRouter.paramMap.subscribe({
      next:(data)=>{
        this.cartId= data.get('id');
      }
    })
  }

  goToPayment(URL:any){
    window.location.href= URL;
  }

  handleAddressForm(){
    this._orders.buyCart(this.cartId,this.addressForm.value).subscribe({
      next:(data)=>{
        console.log(data);
        this.goToPayment(data.session.url);
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }
}
