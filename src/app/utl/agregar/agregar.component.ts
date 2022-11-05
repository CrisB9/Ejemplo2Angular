import { Component, Input, OnInit } from '@angular/core';
import { UtlService } from '../services/utl.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class AgregarComponent{
  @Input() alumnosUtl:AlumnosUtl[]=[];
  @Input() regAlumno:AlumnosUtl={
    nombre:'',
    edad:0
  }

//constructor(private alumnosUtl:UtlService){}

agregar(): void{
  console.log(this.regAlumno);
  this.alumnosUtl.push(this.regAlumno);
  //this.alumnosUtl.agregarNuevoAlumno(this.regAlumno);
  this.regAlumno={
    nombre:'',
    edad:0
  }
}
}