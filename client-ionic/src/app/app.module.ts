import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AuthModule } from '@auth0/auth0-angular';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-r6cdo8stlhgup2wx.us.auth0.com',
      clientId: 'B25HIG5uEk2dTfKdwH4AnevOmXrXLHp6',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
