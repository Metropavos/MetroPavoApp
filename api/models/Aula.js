/**
 * Aula.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {


  createdAt:false,
  updatedAt:false,

  attributes: {

    idAula: {
      type: 'integer',
      required:false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      maxLength: 11
    },

  edificio:{
      type:'string',
      required: true,
      size: 5
    },
  
  piso:{
      type:'string',
      required: true,
      size: 3
    },
  
  numero:{
      type:'int',
      required: true,
      maxLength: 3
    },  
    
/*Colecciones*/ 

/* Referencia seccion - aula (N - 1) */     

clases: {
  collection: 'seccion',
  via: 'salon'
},

  }
};

