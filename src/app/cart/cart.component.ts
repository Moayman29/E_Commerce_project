import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartData: any = null;
  cartCount!:number;

  constructor(
    private _cartServ: CartService,
    private _toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this._cartServ.getCart().subscribe({
      next: (data) => {
        console.log(data);
        this.cartData = data.data;
      },
    });

    this._cartServ.cartNumber.subscribe({
      next:(data)=>{
        console.log(data);
        this.cartCount=data;        
      }
    })
  }

  removeItem(id: any) {
    this._cartServ.deleteItem(id).subscribe({
      next: (data) => {
        console.log(data);
        this.cartData = data.data;
        this._cartServ.cartNumber.next(data.numOfCartItems);
        this._toastr.success('Item removed from your cart successfully');
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  updateItem(id: any, count: any) {
    this._cartServ.updateItem(id, count).subscribe({
      next: (data) => {
        console.log(data);
        this.cartData = data.data;
        this._toastr.success('Cart updated successfully');
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
