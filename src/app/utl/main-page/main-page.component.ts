import { Component, OnInit } from '@angular/core';
/*
import {AlumnosUtl} from '../Interfaces/utl.Interfaces';
*/

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent{

  alumnosUtl:AlumnosUtl[]=[
  ]
  regAlumno : AlumnosUtl={
    nombre :'Pablo',
    edad:24
  }

  agragarNuevoAlumno(datos:AlumnosUtl){
    this.alumnosUtl.push(datos);
  }

}

  


