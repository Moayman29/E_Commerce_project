import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProductsComponent } from './components/products/products.component';
import { authGuard } from './guards/auth/auth.guard';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ShipaddressComponent } from './components/shipaddress/shipaddress.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { BrandDetailsComponent } from './components/brand-details/brand-details.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';
import { ProfileComponent } from './components/profile/profile.component';

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
  {path:"forgotpassword",component:ForgotPasswordComponent,title:"Forgot Password"},
  {path:"updatepassword",canActivate:[authGuard],component:UpdatePasswordComponent,title:"Update Password"},
  {path:"profile",canActivate:[authGuard],component:ProfileComponent,title:"Profile"},
  {path:"login",component:LoginComponent,title:"Login"},
  {path:"signup",component:SignupComponent,title:"Register"},
  {path:"**",component:NotFoundComponent,title:"Not Found"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
