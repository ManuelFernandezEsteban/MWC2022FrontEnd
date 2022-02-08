import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandPageComponent } from './land-page/land-page.component';
import { FormularioPerfilPersonalComponent } from './formulario-perfil-personal/formulario-perfil-personal.component';
import { FormularioPerfilProfesionalComponent } from './formulario-perfil-profesional/formulario-perfil-profesional.component';
import { FormularioPerfilUserComponent } from './formulario-perfil-user/formulario-perfil-user.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations:[
    LandPageComponent,
    FormularioPerfilPersonalComponent,
    FormularioPerfilProfesionalComponent,
    FormularioPerfilUserComponent ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[    
    LandPageComponent,
    FormularioPerfilPersonalComponent,
    FormularioPerfilProfesionalComponent,
    FormularioPerfilUserComponent
  ]
})
export class PagesModule { }
