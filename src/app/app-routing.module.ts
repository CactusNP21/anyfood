import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoggedGuard} from "./pages/user/guard/logged.guard";
import {AdminGuard} from "./pages/admin/guard/admin.guard";
import {DishStateResolver} from "./shared/dish-state-resolver/dish-state.resolver";

const routes: Routes = [
  {path: '', pathMatch: "full", redirectTo: 'discover', resolve: {_ : DishStateResolver}},
  {
    path: 'auth',
    loadChildren: () => import('./pages/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule),
    canActivate: [LoggedGuard]
  },
  {
    path: 'discover',

    loadChildren: () => import('./pages/discover/discover.module').then(m => m.DiscoverModule)
  },
  {
    path: 'administrate',
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'dish',
    loadChildren: () => import('./pages/dish/dish.module').then(m => m.DishModule),
  },
  {
    path: 'saved',
    loadChildren: () => import('./pages/saved/saved.module').then(m => m.SavedModule),
  },
  {
    path: 'shop-list',
    loadChildren: () => import('./pages/shop-list/shop-list.module').then(m => m.ShopListModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
