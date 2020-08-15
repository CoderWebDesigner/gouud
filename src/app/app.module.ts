import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RatingModule } from 'ngx-bootstrap/rating';
import {FormsModule} from '@angular/forms' ;
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { TranslateModule ,TranslateLoader} from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
// import { GoogleMapsModule } from '@angular/google-maps';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { DetailsComponent } from './pages/details/details.component';
import { FavouriteComponent } from './pages/favourite/favourite.component';

import { SliderComponent } from './pages/slider/slider.component';
import { BestSellerComponent } from './pages/best-seller/best-seller.component';
import { AllBestsellerComponent } from './pages/all-bestseller/all-bestseller.component';

import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CallusComponent } from './pages/callus/callus.component';
import { AboutComponent } from './pages/about/about.component';
import { SettingComponent } from './pages/setting/setting.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AccountComponent } from './pages/account/account.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { CurrentordersComponent } from './pages/currentorders/currentorders.component';
import { PreviousordersComponent } from './pages/previousorders/previousorders.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { CountryService } from './country.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthGaurdService } from './auth-gaurd.service';
import { CategoriesService } from './categories.service';
import { ProductsService } from './products.service';
import { CommentService } from './comment.service';
import { HttpRequestInterceptor } from './http-requests.interceptor';
import { SignInGaurdService } from './sign-in.gaurd.service';
import { BrandComponent } from './pages/brand/brand.component';
import { ProductComponent } from './pages/product/product.component';
import { OffersComponent } from './pages/offers/offers.component';
import { DealsComponent } from './pages/deals/deals.component';
import { DealComponent } from './pages/deal/deal.component';
import { AdvertiseComponent } from './pages/advertise/advertise.component';
import { OfferComponent } from './pages/offer/offer.component';
import { OfferService } from './offers.service';
import { SliderService } from './slider.service';
import { CartService } from './cart.service';
import { AddressComponent } from './pages/address/address.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { CashComponent } from './pages/cash/cash.component';
import { ElectronicComponent } from './pages/electronic/electronic.component';
import { BankComponent } from './pages/bank/bank.component';
import { OfferproductsComponent } from './pages/offerproducts/offerproducts.component';
import { UserService } from './user.service';
import { BranddetailComponent } from './pages/branddetail/branddetail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CartComponent,
    DetailsComponent,
    FavouriteComponent,
    LoginComponent,
    SliderComponent,
    BestSellerComponent,
    AllBestsellerComponent,
    RegisterComponent,
    AuthenticationComponent,
    CallusComponent,
    AboutComponent,
    SettingComponent,
    ProfileComponent,
    AccountComponent,
    OrdersComponent,
    CurrentordersComponent,
    PreviousordersComponent,
    BrandComponent,
    ProductComponent,
    OffersComponent,
    DealsComponent,
    DealComponent,
    AdvertiseComponent,
    OfferComponent,
    AddressComponent,
    PaymentComponent,
    CashComponent,
    ElectronicComponent,
    BankComponent,
    OfferproductsComponent,
    BranddetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    // GoogleMapsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
    ToastrModule.forRoot(),
    RatingModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCjzzd4nbOiZJx3B53u9ZZAq0tcOsVUBdg',
      libraries: ['places']
    })
  ],
  providers: [
    AuthService,
    CountryService,
    CookieService,
    CategoriesService,
    ProductsService,
    CommentService,
    AuthGaurdService,
    SignInGaurdService,
    OfferService,
    CountryService,
    SliderService,
    CartService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
