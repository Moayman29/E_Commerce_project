import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingInterceptor } from './interceptors/loading/loading.interceptor';
import { AboutComponent } from './components/about/about.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { BrandDetailsComponent } from './components/brand-details/brand-details.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsComponent } from './components/products/products.component';
import { ShipaddressComponent } from './components/shipaddress/shipaddress.component';
import { ShopPopularSliderComponent } from './components/shop-popular-slider/shop-popular-slider.component';
import { SignupComponent } from './components/signup/signup.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MyHttpInterceptor } from './interceptors/my-http/my-http.interceptor';
import { ProductFilterPipe } from './pipes/product-filter/product-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BrandsComponent,
    CartComponent,
    CategoriesComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    NotFoundComponent,
    SignupComponent,
    ProductsComponent,
    ProductDetailsComponent,
    ShipaddressComponent,
    CategoryDetailsComponent,
    BrandDetailsComponent,
    MainSliderComponent,
    ShopPopularSliderComponent,
    WishListComponent,
    StarRatingComponent,
    ForgotPasswordComponent,
    AllOrdersComponent,
    UpdatePasswordComponent,
    ProfileComponent,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({positionClass: 'toast-bottom-right'}),
    BrowserAnimationsModule,
    CommonModule,
    NgxPaginationModule,
    CarouselModule,
    NgxSpinnerModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
