import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BrandsComponent } from './brands/brands.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './signup/signup.component';
import { ProductsComponent } from './products/products.component';
import { authGuard } from './auth.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShipaddressComponent } from './shipaddress/shipaddress.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { BrandDetailsComponent } from './brand-details/brand-details.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:"home",canActivate:[authGuard],component:HomeComponent,title:"Home"},
  {path:"about",canActivate:[authGuard],component:AboutComponent,title:"About"},
  {path:"brands",canActivate:[authGuard],component:BrandsComponent,title:"Brands"},
  {path:"brands/:id",canActivate:[authGuard],component:BrandDetailsComponent,title:"Brand Details"},
  {path:"products",canActivate:[authGuard],component:ProductsComponent,title:"Products"},
  {path:"cart",canActivate:[authGuard],component:CartComponent,title:"Cart"},
  {path:"categories",canActivate:[authGuard],component:CategoriesComponent,title:"Categories"},
  {path:"categories/:id",canActivate:[authGuard],component:CategoryDetailsComponent,title:"Category Details"},
  {path:"shipaddress/:id",canActivate:[authGuard],component:ShipaddressComponent,title:"ShippingAddress"},
  {path:"products/:id",canActivate:[authGuard],component:ProductDetailsComponent,title:"Product Details"},
  {path:"wishlist",canActivate:[authGuard],component:WishListComponent,title:"Wish List"},
  {path:"allorders",canActivate:[authGuard],component:AllOrdersComponent,title:"All Orders"},
  {path:"login",component:LoginComponent,title:"Login"},
  {path:"signup",component:SignupComponent,title:"Register"},
  {path:"forgotpassword",component:ForgotPasswordComponent,title:"Forgot Password"},
  {path:"**",component:NotFoundComponent,title:"Not Found"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
