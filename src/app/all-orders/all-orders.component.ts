import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit{
  ordersArr:any[] = [];
  user:any;

  constructor(private _ordersServ:OrdersService, private _auth:AuthService){}

  ngOnInit(): void {
    this._auth.userData.subscribe({
      next:(data)=>{
        console.log('userdata',data);
        this.user=data.id;
      }
    })


    this._ordersServ.getUserOrders(this.user).subscribe({
      next:(data)=>{
        console.log(data);
        this.ordersArr=data;
      },
      error:(error)=>{
        console.log(error);
        
      }
    })
  }
}
