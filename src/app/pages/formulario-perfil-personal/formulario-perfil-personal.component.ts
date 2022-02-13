import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Skill } from 'src/app/interfaces/skill';
import { LeerJsonSkillService } from '../../services/leer-json-skill.service';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { GenerarAvatarService } from 'src/app/services/generar-avatar.service';


@Component({
  selector: 'app-formulario-perfil-personal',
  templateUrl: './formulario-perfil-personal.component.html',
  styleUrls: ['./formulario-perfil-personal.component.css']
})
export class FormularioPerfilPersonalComponent implements OnInit, AfterViewInit {

  public formEnviado: boolean = false;
  public skillsSeleccionadas: Skill[] = []

  public skills: Skill[] = [];

  @ViewChild('skillsAseleccionar') skillsAseleccionar!: ElementRef;
  @ViewChild('skillsSeleccionadas') skASeleccionadas!: ElementRef;

  public userForm = this.fb.group({
    nombre: ['Manuel', [Validators.required, Validators.pattern("[a-zA-Z Ñ ñ]*")]],
    apellidos: ['Fernana', [Validators.required, Validators.pattern("[a-zA-Z Ñ ñ]*")]],
    descripcion: [''],
    ciudad: ['malala', [Validators.required, Validators.pattern("[a-zA-Z Ñ ñ]+")]],
    email: ['lolo@lolo', [Validators.required, Validators.email]],
    pais: ['españa', [Validators.required, Validators.pattern("[a-zA-Z Ñ ñ]*")]],
    experiencia: ['1', [Validators.required, Validators.min(0)]],
    sector: ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder,
    private renderer: Renderer2,
    private leerJsonSkillService: LeerJsonSkillService,
    private generarAvatarService: GenerarAvatarService,
    private router: Router) { }

  ngAfterViewInit() {

    this.leerJsonSkillService.getSkills().subscribe(resp => {

      this.skills = resp.Skills;
      this.skills.forEach(skill => {
        const div = this.renderer.createElement('div');
        this.renderer.listen(div, 'click', (event: PointerEvent) => {

          this.renderer.addClass(this.renderer.parentNode(event.target), 'ocultar');
          const div2 = this.renderer.createElement('div');
          this.renderer.addClass(div2, 'skill');
          const img = this.renderer.createElement('img');
          this.renderer.addClass(img, 'img');
          this.renderer.setAttribute(img, 'src', skill.src);
          this.renderer.appendChild(div2, img);
          this.renderer.setAttribute(div2, 'src', skill.src);
          this.renderer.setAttribute(div2, 'nombre', skill.nombre);
          this.renderer.appendChild(this.skASeleccionadas.nativeElement, div2);          
          this.renderer.listen(div2, 'click', (event: PointerEvent) => {
            
            this.renderer.removeChild(this.skASeleccionadas.nativeElement, this.renderer.parentNode(event.target));
            this.renderer.removeClass(div, 'ocultar');
          });
        })
        this.renderer.addClass(div, 'card');
        this.renderer.setStyle(div,'cursor','pointer');
        const img = this.renderer.createElement('img');
        this.renderer.setStyle(img,'width','50px');

        this.renderer.addClass(img, 'card-img-top');

        this.renderer.appendChild(div, img);
        const card_body = this.renderer.createElement('div');
        const p = this.renderer.createElement('p');
        this.renderer.addClass(p,'card-text');
        const nombre = this.renderer.createText(skill.nombre)
        this.renderer.appendChild(p,nombre);
        this.renderer.appendChild(card_body,p);
        this.renderer.appendChild(div,card_body)
        this.renderer.setAttribute(img, 'src', skill.src);
        this.renderer.setAttribute(img, 'nombre', skill.nombre);
        this.renderer.appendChild(this.skillsAseleccionar.nativeElement, div);

      });

    })
  }


  ngOnInit() {

  }

  campoNoValido(campo: string): boolean {
    if (!this.userForm.get(campo)?.valid && this.formEnviado) {
      return true;
    }
    return false
  }
  guardarPerfil() {
    this.formEnviado = true;
    if (!this.userForm.valid) {     
      return;
    }
    

    const element = this.skASeleccionadas.nativeElement as Element;
    const listaSkills = element.children;

    for (let i = 0; i < listaSkills.length; i++) {
      const el = listaSkills[i];
      const nombre = el.getAttribute('nombre') || '';
      const src = el.getAttribute('src') || '';
      this.skillsSeleccionadas.push({ 'nombre': nombre, 'src': src });
    }
   
    const user: User = {
      nombre: this.userForm.get('nombre')?.value,
      apellidos: this.userForm.get('apellidos')?.value,
      email: this.userForm.get('email')?.value,
      descripcion: this.userForm.get('descripcion')?.value,
      ciudad: this.userForm.get('ciudad')?.value,
      pais: this.userForm.get('pais')?.value,
      experiencia: this.userForm.get('experiencia')?.value,
      sector: this.userForm.get('sector')?.value,      
      skills: this.skillsSeleccionadas
    }
    localStorage.setItem('user', JSON.stringify(user));
   
    this.router.navigateByUrl('landpage/ver_perfil');
  }
}
