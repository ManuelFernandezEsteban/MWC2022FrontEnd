import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerarAvatarService {

  constructor(private http:HttpClient) { }

  getAvatar(nombre:string,apellidos:string):Observable<any>{
    
    return this.http.get('https://eu.ui-avatars.com/api/?name=Manuel+Fernana');      
    
    
  }
}
