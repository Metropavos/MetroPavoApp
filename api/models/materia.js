/**
 * Materia.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {


  createdAt:false,
  updatedAt:false,

  attributes: {

    idMateria: {
      type: 'integer',
      required:false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      maxLength: 11
    },

    nombre:{
      type:'string',
      required: true,
      size: 25
    },

    codigo:{
      type:'string',
      required: true,
      unique: true,
      size: 7
    },

    credito:{
      type:'int',
      required: true,
      maxLength: 1
    },
  
      /*Colecciones*/
/*  Referencia seccion - materia (N - 1)*/

    secciones: {
      collection: 'seccion',
      via: 'asignatura'
    },

/*  Referencia carrera - materia (N - M)*/ 

    carreras: {
      collection: 'carrera',
      via: 'materias'
    },   

/*  Referencia departamento - materia (1 - N)*/

    ofrecida: {
      model: 'departamento'
    },


  }
};

