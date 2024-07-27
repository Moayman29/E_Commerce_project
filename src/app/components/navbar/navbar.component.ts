import { Component, HostListener, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { WishListService } from 'src/app/services/wish-list/wish-list.service';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLogIn = false;

  wishCount!:number;
  cartCount!:number;

  constructor(
    private _auth: AuthService,
    private _router: Router,
    private _wishServ: WishListService,
    private _cartServ: CartService
  ) {}

  ngOnInit(): void {
    this._auth.isLoggedIn.subscribe((data) => {
      this.isLogIn = data;
    });

    this._wishServ.wishNumber.subscribe({
      next:(data)=>{
        console.log('wishCount=' , data);
        this.wishCount=data;
      }
    })

    this._cartServ.cartNumber.subscribe({
      next:(data)=>{
        console.log(data);
        this.cartCount=data;        
      }
    })
  };

  scroll: boolean = false;

  @HostListener('window:scroll', ['$event'])
  scrollFunction() {
    if (
      document.body.scrollTop > 60 ||
      document.documentElement.scrollTop > 60
    ) {
      this.scroll = true;
    } else {
      this.scroll = false;
    }
  }

  logOut() {
    this._auth.logOut();
  }

  goToFacebook() {
    window.location.href = 'http://www.facebook.com';
  }

  sendWhatsappMsg() {
    window.open('https://api.whatsapp.com/send?phone=01271995479', 'blank');
  }

  goToWishList() {
    this._router.navigate(['/wishlist']);
  }

  goToCart() {
    this._router.navigate(['/cart']);
  }
}
