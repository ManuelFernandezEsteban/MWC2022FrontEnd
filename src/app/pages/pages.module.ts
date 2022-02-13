import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandPageComponent } from './land-page/land-page.component';
import { FormularioPerfilPersonalComponent } from './formulario-perfil-personal/formulario-perfil-personal.component';

import { FormularioPerfilUserComponent } from './formulario-perfil-user/formulario-perfil-user.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations:[
    LandPageComponent,
    FormularioPerfilPersonalComponent,

    FormularioPerfilUserComponent ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:[    
    LandPageComponent,
    FormularioPerfilPersonalComponent,

    FormularioPerfilUserComponent
  ]
})
export class PagesModule { }
