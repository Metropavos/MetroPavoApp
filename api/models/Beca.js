/**
 * Beca.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {


  connection: ' metropavoapp',
  tableName: 'beca',

  createdAt:false,
  updatedAt:false,

  attributes: {
    idBeca: {
      type: 'integer',
      required:false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      maxLength: 11
    },

  tipo:{
      type:'string',
      required: true,
      size: 20
    },
  
  porcentaje:{
      type:'int',
      required: true,
      maxLenght: 3
    },
    
/*Colecciones*/ 

/* Referencia estudiante - beca (1 - 1) */     

becado: {
  model: 'estudiante',
  unique: true
  },   

  }
};

