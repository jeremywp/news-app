import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopComponent} from "./top/top.component";
import {AllComponent} from "./all/all.component";
import {FavoritesComponent} from "./favorites/favorites.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'Top',
    component: TopComponent
  },
  {
    path: 'All',
    component: AllComponent
  },
  {
    path: 'Favorites',
    component: FavoritesComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
