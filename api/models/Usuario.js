/**
 * Usuario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: ' metropavoapp',
  tableName: 'usuario',

  createdAt:false,
  updatedAt:false,

  attributes: {

    idUsuario: {
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
      size: 20
    },

    apellido:{
      type:'string',
      required: true,
      size: 20
    },

    cedula:{
      type:'int',
      required: true,
      unique: true,
      maxLength: 11
    },

    carnet:{
      type:'integer',
      required: true,
      unique: true,
      maxLength: 12
    },

    correo:{
      type:'email',
      required: true,
      unique: true 
    },

    FechaNacimiento :{
      type:'string',
      required: false,
      unique: true
    },
  
    sexo:{
      type:'string',
      required: true,
      unique: true,
      maxLength: 1
    },


    /*Colecciones*/

  }
};

