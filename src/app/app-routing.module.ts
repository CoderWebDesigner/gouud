import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BestSellerComponent } from './pages/best-seller/best-seller.component';
import { AllBestsellerComponent } from './pages/all-bestseller/all-bestseller.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { LoginComponent } from './pages/login/login.component';
import { AccountComponent } from './pages/account/account.component';
import { FavouriteComponent } from './pages/favourite/favourite.component';
import { DetailsComponent } from './pages/details/details.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { PreviousordersComponent } from './pages/previousorders/previousorders.component';
import { CurrentordersComponent } from './pages/currentorders/currentorders.component';
import { CartComponent } from './pages/cart/cart.component';
import { AboutComponent } from './pages/about/about.component';
import { SettingComponent } from './pages/setting/setting.component';
import { CallusComponent } from './pages/callus/callus.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGaurdService } from './auth-gaurd.service';
import { SignInGaurdService } from './sign-in.gaurd.service';
import { BrandComponent } from './pages/brand/brand.component';
import { DealsComponent } from './pages/deals/deals.component';
import { OffersComponent } from './pages/offers/offers.component';
import { AddressComponent } from './pages/address/address.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { CashComponent } from './pages/cash/cash.component';
import { ElectronicComponent } from './pages/electronic/electronic.component';
import { BankComponent } from './pages/bank/bank.component';
import { OfferproductsComponent } from './pages/offerproducts/offerproducts.component';
import { BranddetailComponent } from './pages/branddetail/branddetail.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'  },
  { path: 'home', component: HomeComponent,children:[
    { path: ':id', component: BrandComponent },
  ]},
  { path: 'details', component: HomeComponent, redirectTo: '' },
  
  { path: 'cart', component: CartComponent ,canActivate: [AuthGaurdService]},
  { path: 'bestseller', redirectTo: ''},
  { path: 'bestseller/:id', component: BestSellerComponent },
  
  { path: 'allbestseller', component: AllBestsellerComponent },
  { path: 'auth', redirectTo: 'auth/login'},
  { path: 'auth', component: AuthenticationComponent,canActivate:[SignInGaurdService],children:[
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
  ] },
  { path: 'favourite', component: FavouriteComponent,canActivate: [AuthGaurdService] },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'account', component: AccountComponent ,canActivate: [AuthGaurdService]},
  { path: 'account/profile', component: ProfileComponent ,canActivate: [AuthGaurdService]},
  { path: 'account/setting', component: SettingComponent ,canActivate: [AuthGaurdService]},
  { path: 'orders', redirectTo: 'orders/current',canActivate: [AuthGaurdService]},
  {
    path: 'orders', component: OrdersComponent ,canActivate: [AuthGaurdService] ,children: [
      { path: 'previous', component: PreviousordersComponent },
      { path: 'current', component: CurrentordersComponent }
    ]
  },

  { path: 'about', component: AboutComponent ,canActivate: [AuthGaurdService]},
  { path: 'callus', component: CallusComponent ,canActivate: [AuthGaurdService] },
  { path: 'deals', component: DealsComponent  },
  { path: 'offers/:name', component: OffersComponent},
  { path: 'offer/:id', component: OfferproductsComponent },
  { path: 'address/:id', component: AddressComponent  },
  { path: 'brand/:id', component: BranddetailComponent  },
  { path: 'payment', component: PaymentComponent,canActivate: [AuthGaurdService],children:[
    {path:'cash',component:CashComponent},
    {path:'electronic',component:ElectronicComponent},
    {path:'bank',component:BankComponent},
  ]  },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
