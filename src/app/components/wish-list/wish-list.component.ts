import { Component, Inject, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart/cart.service';
import { WishListService } from 'src/app/services/wish-list/wish-list.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit{
  wishListArr: any[] = [];
  isWished: boolean = true;

  wishCount!:number;

  constructor() {}
  private _toastr = inject(ToastrService);
  private _router = inject(Router);
  private _cartServ = inject(CartService);
  private _wishServ = inject(WishListService);

  ngOnInit(): void {
    this._wishServ.getWishList().subscribe({
      next:(data)=>{
        console.log(data);
        this.wishListArr=data.data;  
      },
      error:(error)=>{
        console.log(error);
      }
    });

    this._wishServ.wishNumber.subscribe({
      next:(data)=>{
        console.log('wishCount=' , data);
        this.wishCount=data;
      }
    })
  };

  goToProduct(id: any) {
    this._router.navigate(['/products', id]);
  }

  addToCart(id: any) {
    this._cartServ.addProductToCart(id).subscribe({
      next: (data) => {
        console.log(data);
        this._toastr.success('Item added to cart successfully');
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  removeFromWishList(id: any) {
    this._wishServ.removeFromWishList(id).subscribe({
      next: (data) => {
        console.log(data);
        this._wishServ.wishNumber.next(data.data.length);
        this.wishListArr= this.wishListArr.filter((wishListItem)=>wishListItem._id!=id);


        this._toastr.success(
          'Item removed from your wish-list successfully'
        );
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
