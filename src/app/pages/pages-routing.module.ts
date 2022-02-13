import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from "@angular/router";
import { LandPageComponent } from './land-page/land-page.component';
import { FormularioPerfilPersonalComponent } from './formulario-perfil-personal/formulario-perfil-personal.component';
import { FormularioPerfilUserComponent } from './formulario-perfil-user/formulario-perfil-user.component';


const routes:Routes=[
  {
    path:'landpage',
    component:LandPageComponent,
    children:[  
      {path:'crear_perfil',component:FormularioPerfilPersonalComponent},
      {path:'ver_perfil',component:FormularioPerfilUserComponent}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PagesRoutingModule { }
