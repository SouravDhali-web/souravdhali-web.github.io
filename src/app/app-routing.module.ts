import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
// import { NavComponent } from './nav/nav.component';
// import { FooterComponent } from './footer/footer.component';



const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent, data: {animation: 'HomePage'} },
  { path: 'Portfolio', component: PortfolioComponent, data: {animation: 'PortfolioPage'} },
  { path: 'About', component: AboutComponent, data: {animation: 'AboutPage'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
