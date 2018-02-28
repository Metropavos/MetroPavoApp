/**
 * Horario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {


  createdAt:false,
  updatedAt:false,

  attributes: {

    idHorario: {
      type: 'integer',
      required:false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      maxLength: 11
    },

  dia:{
      type:'string',
      required: true,
      size: 15
    },
  
  hora:{
      type:'string',
      required: true,
      size: 15
    },   
    
/*Colecciones*/ 

/* Referencia seccion - horario (N - M) */     

secciones: {
  collection: 'seccion',
  via: 'horarios'
  },   

  }
};

