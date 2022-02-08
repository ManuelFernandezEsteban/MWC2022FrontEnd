import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from "@angular/router";
import { LandPageComponent } from './pages/land-page/land-page.component';
import { PagesRoutingModule } from './pages/pages-routing.module';

const routes : Routes=[
  {path:'', redirectTo:'landpage',pathMatch:'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    PagesRoutingModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
