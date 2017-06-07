import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ListOfStoresComponent } from './list-of-stores/list-of-stores.component';
import { StoreDetailPageComponent } from './store-detail-page/store-detail-page.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'list-of-stores', component: ListOfStoresComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ListOfStoresComponent,
    StoreDetailPageComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
