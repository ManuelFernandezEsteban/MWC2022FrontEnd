import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-land-page',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.css']
})
export class LandPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  crearPerfil(){
    this.router.navigateByUrl('crear_perfil')
  }
  verPerfil(){
    this.router.navigateByUrl('ver_perfil')
  }
}
