import { Component } from '@angular/core';

@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.css']
})
export class ListadoAlumnosComponent {

  year=2000;
  public alumnos=[
    {nombre:'Emilia',apellido:'ortiz',genero:'femenino',fnac:new Date(1981,11,12)},
    {nombre:'celeste',apellido:'ortiz',genero:'femenino',fnac:new Date(1981,11,12)},
    {nombre:'paula',apellido:'ortiz',genero:'femenino',fnac:new Date(2006,9,15)},
    {nombre:'oscar',apellido:'ortiz',genero:'masculino',fnac:new Date(1986,2,18)}
  ]

  constructor(){}

  ngOnInit():void{

  }
}

