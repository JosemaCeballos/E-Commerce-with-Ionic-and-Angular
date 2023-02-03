import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing, appRoutingProviders } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AuthModule } from '@auth0/auth0-angular';
import { MaterialExampleModule } from './material.module';

import { LoginAuth0Component } from './login-auth0/login-auth0.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { StoreComponent } from './components/store/store.component';
import { CartComponent } from './components/cart/cart.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginAuth0Component,
    SidebarComponent,
    HomeComponent, StoreComponent, CartComponent, FavoritesComponent, UserOrdersComponent, ProductCardComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    AuthModule.forRoot({
      domain: 'dev-r6cdo8stlhgup2wx.us.auth0.com',
      clientId: 'zNGOtqUcMBSi4oI9N1ET8avoBlzNFhx9',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    MaterialExampleModule,
    HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
})
export class AppModule { }
