import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtlService {
  
  private _alumnosUtl:AlumnosUtl[]=[
    {
      nombre:'Gustavo',
      edad:20
    },
    {
      nombre:'Carlos',
      edad:22
    },
    {
      nombre:'Rosa',
      edad:21
    },
  ]

  constructor() { }
  get alumnos():AlumnosUtl[]{
    return[...this._alumnosUtl];
  }

  agregarNuevoAlumno(datos:AlumnosUtl){
    
    this._alumnosUtl.push(datos);
  }
}
