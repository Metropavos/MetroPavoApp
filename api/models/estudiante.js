/**
 * Estudiante.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {



  createdAt:false,
  updatedAt:false,

  attributes: {
    
    idEstudiante: {
      type: 'integer',
      required:false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      maxLength: 11
    },

    tipo: {
      type: 'string',
      required: true,
      size: 15
    },

    /*Colecciones*/

    /* Referencia periodo - estudiante (N - M) */

    periodos: {
      collection: 'periodo',
      via: 'estudiantes',
      dominant: true
    },

    /*  Referencia seccion - estudiante (N - M)*/
    
    secciones: {
      collection: 'seccion',
      via: 'estudiantes',
      dominant: true
    },

    /*  Referencia seleccion - estudiante (N - M)*/
    
    selecciones: {
      collection: 'seleccion',
      via: 'integrantes'
    },

    /*  Referencia beca - estudiante (N - M)*/
    
    beca: {
      collection: 'beca',
      via: 'becado'
    },

/*  Referencia carera - estudiante (N - M)*/ 

  carreras: {
  collection: 'carrera',
  via: 'estudiantes',
},
    /*Herencia*/

    attachedTo:{
      model: 'user',
    }

  }
};

