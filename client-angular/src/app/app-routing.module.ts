import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { StoreComponent } from './components/store/store.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { CartComponent } from './components/cart/cart.component';

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "user", component: UserOrdersComponent },
  { path: "store", component: StoreComponent },
  { path: "favorites", component: FavoritesComponent },
  { path: "cart", component: CartComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)
