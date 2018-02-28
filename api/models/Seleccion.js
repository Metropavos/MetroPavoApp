/**
 * Seleccion.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: ' metropavoapp',
  tableName: 'seleccion',

  createdAt:false,
  updatedAt:false,

  attributes: {

    idSeleccion: {
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
  entrenador:{
      type:'string',
      required: true,
      size: 40
    },   
    
/*Colecciones*/ 

/* Referencia estudiante - seleccion (N - M) */     

integrantes: {
  collection: 'estudiante',
  via: 'selecciones',
  dominant: true
  },   

  }
};

