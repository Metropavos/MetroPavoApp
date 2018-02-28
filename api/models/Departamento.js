/**
 * Departamento.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {



  createdAt:false,
  updatedAt:false,

  attributes: {
    
    idDepartamento: {
      type: 'integer',
      required:false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      maxLength: 11
    },

    nombre: {
      type: 'string',
      required: true,
      size: 25
    },

    /*Colecciones*/

    /* Referencia profesor - departamento (N - 1) */ 

    profesores: {
      collection: 'profesor',
      via: 'adscrito'
    },

    /* Referencia materia - departamento (N - 1) */ 

    materias:{
        collection:'materia',
        via:'ofrecida'

    },
  }
};

