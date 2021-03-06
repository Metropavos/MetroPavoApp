/**
 * Profesor.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {



  createdAt:false,
  updatedAt:false,

  attributes: {

    idProfesor: {
      type: 'integer',
      required:false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      maxLength: 11
    },

    profesion:{
      type:'string',
      required: true,
      size: 25
    },

    FechaNacimiento :{
      type:'string',
      required: false,
      unique: true
    },

    /*Colecciones*/

    /* Referencia departamento - profesor (1 - N) */

    adscrito: {
      model: 'departamento'
    },

    /* Referencia seccion - profesor  (N - 1) */  

    secciones: {
      collection: 'seccion',
      via: 'docente'
    },

    /*Herencia*/

    attachedTo:{
      model: 'user',
    }

  }
};

