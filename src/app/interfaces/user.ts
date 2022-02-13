import { Skill } from "./skill";

export interface User{
    nombre:string;
    apellidos:string;
    email:string;
    descripcion:string;
    ciudad:string;
    pais:string;
    experiencia:number;
    sector:string;
    
    skills:Skill[];

}