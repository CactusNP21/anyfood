import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavigationModule} from "./feature/navigation/navigation.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtInterceptor} from "./core/interceptors/jwt.interceptor";
import {SpinnerInterceptor} from "./core/interceptors/spinner.interceptor";
import {SpinnerOverlayModule} from "./feature/spinner-overlay/spinner-overlay.module";
import {DishesStateService} from "./core/dishes-state/dishes-state.service";
import {ShopListStateService} from "./core/shop-list-state/shop-list-state.service";
import {AuthenticationService} from "./pages/authentication/service/authentication.service";

function initializeDishState(dishState: DishesStateService,
                             shopState: ShopListStateService,
                             auth: AuthenticationService
                             ) {
   return async () => {
    if (localStorage.getItem('saved')) {
      dishState.savedDishes = JSON.parse(localStorage.getItem('saved')!);
      dishState.change = false
    }
    if (localStorage.getItem('marked')) {
      shopState.mark(JSON.parse(localStorage.getItem('marked')!))
    }
    if (localStorage.getItem('token')) {
      await auth.quickLogin()
    }
  }
}

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavigationModule,
    HttpClientModule,
    SpinnerOverlayModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true},
    {
      provide: APP_INITIALIZER,
      useFactory: initializeDishState,
      deps: [DishesStateService, ShopListStateService, AuthenticationService],
      multi: true
    }
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
