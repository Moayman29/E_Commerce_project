import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';
import { WishListService } from 'src/app/services/wish-list/wish-list.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  productsArr: any[] = [];
  wishListArr: any[] = [];
  newWishList:any[]= [];

  p:number= 1;
  collectionArr:any=null;
  limit:any=null;


  constructor() {}
  private _toastr = inject(ToastrService);
  private _productServ = inject(ProductService);
  private _router = inject(Router);
  private _cartServ = inject(CartService);
  private _wishServ = inject(WishListService);


  ngOnInit() {
    this._productServ.getProductsOfPage(this.p).subscribe({
      next: (data) => {
        console.log(data);
        this.productsArr = data.data;        
        this.collectionArr=data;
        this.p=data.metadata.currentPage;
        this.limit=data.metadata.limit;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getPage(page:any){
    console.log(`page${page}`);
    
    this._productServ.getProductsOfPage(page).subscribe({
      next:(data)=>{
        console.log(data);
        this.collectionArr=data;
        this.productsArr=data.data;
        this.p=data.metadata.currentPage;
        this.limit=data.metadata.limit;
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }

  goToProduct(id: any) {
    this._router.navigate(['/products', id]);
  }

  addToCart(id: any) {
    this._cartServ.addProductToCart(id).subscribe({
      next: (data) => {
        console.log(data);
        this._cartServ.cartNumber.next(data.numOfCartItems);
        this._toastr.success('Item added to cart successfully');
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  updateWishIcon(id:any){
    this._wishServ.getWishList().subscribe({
      next:(data)=>{
        console.log(data);
        this.wishListArr=data.data;
        let found= this.wishListArr.find((Element:{_id:any})=> Element._id == id);  
        if(found == undefined){
          this._wishServ.addToWishList(id).subscribe({
            next:(data)=>{
              console.log(data);
              this.newWishList=data.data;
              this._wishServ.wishNumber.next(data.data.length);
                    this._toastr.success('Item added to your wish-list successfully');
            }
          })
        } else {
          this._wishServ.removeFromWishList(id).subscribe({
            next:(data)=>{
              console.log(data);
              this.newWishList=data.data;
              this._wishServ.wishNumber.next(data.data.length);
                    this._toastr.success('Item removed from your wish-list successfully');
            }
          })
        }
      }
    })
  }


}
