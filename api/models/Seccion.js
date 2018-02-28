/**
 * Seccion.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: ' metropavoapp',
  tableName: 'seccion',

  createdAt:false,
  updatedAt:false,

  attributes: {

    idSeccion: {
      type: 'integer',
      required:false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      maxLength: 11
    },

  numero:{
      type:'int',
      required: true,
      unique: true,
      maxLength: 2
    },
  
  cupos:{
      type:'int',
      required: true,
      unique: true,
      maxLength: 2
    },   
    
/*Colecciones*/ 

/* Referencia profesor-seccion (1 - N) */     

  docente: {
      model: 'profesor'
  },

/* Referencia periodo - seccion (1 - N) */

  trimestre: {
      model: 'periodo'
  },   

/*  Referencia materia - seccion (1 - N)*/ 

  asignatura: {
      model: 'materia'
  },         

/*  Referencia estudiante - seccion (N - M)*/   
  
  estudiantes: {
      collection: 'estudiante',
      via: 'secciones'
  },   

/*  Referencia aula - seccion (1 - N)*/ 

  salon: {
      model: 'aula'
  },          
/*  Referencia estudiante - seccion (N - M)*/   
  
  horarios: {
      collection: 'horario',
      via: 'secciones'
  },

  }
};

