import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LeerJsonSkillService { 
 

  constructor(private http:HttpClient) { 
    //this.getSkills();
  }

  getSkills():Observable<any>{   

   
    return this.http.get('../../assets/skills.json');
    
    
  }

}
