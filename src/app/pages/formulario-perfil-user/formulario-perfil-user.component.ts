import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { Skill } from '../../interfaces/skill';

@Component({
  selector: 'app-formulario-perfil-user',
  templateUrl: './formulario-perfil-user.component.html',
  styleUrls: ['./formulario-perfil-user.component.css']
})
export class FormularioPerfilUserComponent implements OnInit {  

  public user:User={
    nombre: '',
    apellidos: '',
    email: '',
    descripcion: '',
    ciudad: '',
    pais: '',
    experiencia: 0,
    sector: '',
    skills: []
  }
  public skills:Skill[]=[]

  constructor() {

   }

  ngOnInit(): void {
    
    const userStorage = localStorage.getItem('user');
    if (userStorage){
      this.user=JSON.parse(userStorage);
      console.log(this.user);
    }

    this.skills=this.user.skills;


  }

}
