import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DirectoryComponent } from './directory/directory.component';
import { PlanRouteComponent } from './plan-route/plan-route.component';
import { RouteComponent } from './route/route.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'directory', component: DirectoryComponent },
  { path: 'plan', component: PlanRouteComponent },
  { path: 'routetest', component: RouteComponent},
  { path: '**', redirectTo: '/home' } // catch-all route for undefined paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
