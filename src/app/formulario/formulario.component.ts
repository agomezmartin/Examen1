import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  /* ***** ***** PROPIEDADES ***** ******/

  /* DATOS PERSONALES */
/*  nombre = "";
  apellidos = "";
  contrasenna = "";
  dni = "";
*/  sexo = "";

  /* FORMACIÓN */
//  tituloFormacion = "";
//  nombreCurso = "";
  /* ************************ */
/*  fechaInicioCurso = DatePipe;*/
//  fechaInicioCurso = Date;
/*  fechaFinCurso = DatePipe;*/
//  fechaFinCurso = Date;
  /* ************************ */
  formacionEnCurso = false;
//  centroFormativo = "";
  
  /* EXPERIENCIA */
//  puesto = "";
//  empresa = "";
//  descripcionPuesto = "";
  /* ************************ */
/*  fechaInicioPuesto = DatePipe;*/
//  fechaInicioPuesto = Date;
/*  fechaFinPuesto = DatePipe;*/
//  fechaFinPuesto = Date;
  /* ************************ */
  puestoEnCurso = false;
//  salarioAnual: number = 0; 

  /* IDIOMAS */
  idioma = "";
  nivelHablado = "";
  nivelEscrito = "";
  nivelLeido = "";

  /* PROPERTY BINDING */
  p_datos_position = "absolute";
  p_datos_visibility = "hidden";
  p_formacion_position = "absolute";
  p_formacion_visibility = "hidden";
  p_experiencia_position = "absolute";
  p_experiencia_visibility = "hidden";
  p_idioma_position = "absolute";
  p_idioma_visibility = "hidden";


  /* ***** ***** FUNCIONES ***** ******/
  /* ***** Recoger todos los datos ******/
  guardarTodos(){
    
    }

    /* ***** Recoger y mostrar DATOS PERSONALES ******/
    guardarDatosPersonales(){
      this.p_datos_position = "relative";
      this.p_datos_visibility = "visible";
      /* Asignación de valores introducidos por el USUARIO */
//      this.nombre = "";
//      this.apellidos = "";
//      this.contrasenna = "";
//      this.dni = "";
    
    }

    /* ***** Recoger y mostrar FORMACIÓN ******/
    guardarFormacion(){
      this.p_formacion_position = "relative";
      this.p_formacion_visibility = "visible";
    }

    /* ***** Recoger y mostrar EXPERIENCIA ******/
    guardarExperiencia(){
      this.p_experiencia_position = "relative";
      this.p_experiencia_visibility = "visible";
    }

    /* ***** Recoger y mostrar IDIOMA ******/
    guardarIdioma(){
      this.p_idioma_position = "relative";
      this.p_idioma_visibility = "visible";
    }

  }
