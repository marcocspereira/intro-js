import { HeroDetailComponent } from "./heroes/hero-detail/hero-detail.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";

/**
 * Routes tell the Router which view to display when an user clicks
 *  a link or pastes an URL into the browser address bar
 */
const routes: Routes = [
  {
    // default route that fully matches the empty path
    path: "",
    redirectTo: "/dashboard",
    pathMatch: "full"
  },
  {
    // a string that matches the URL in the browser address bar
    path: "heroes",
    // the component that the router should create when navigating to this route
    component: HeroesComponent
  },
  {
    path: "detail/:id",
    component: HeroDetailComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  }
];

// @NgModule metadata initializes the router and starts it listening for browser location changes
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
