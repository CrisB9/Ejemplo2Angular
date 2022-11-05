import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AgregarComponent } from './agregar/agregar.component';
import { UtlService } from './services/utl.service';
import { UsuariosComponent } from './usuarios/usuarios.component';


@NgModule({
  declarations: [

  
    AlumnosComponent,
        AgregarComponent,
        UsuariosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
  ],

  providers:[
  UtlService
  ]

})
export class UtlModule { }
