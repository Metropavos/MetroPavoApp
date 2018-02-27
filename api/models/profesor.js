/**
 * Profesor.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    attributes: {

      idusuario: {
        type: 'integer',
        required:false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
      },
  
      nombre:{
        type:'string',
        required: true
      },
  
      apellido:{
        type:'string',
        required: true
      },
  
      cedula:{
        type:'int',
        required: true,
        unique: true
      },
  
      carnet:{
        type:'integer',
        required: true,
        unique: true
      },
  
      correo:{
        type:'email',
        required: true,
        unique: true 
      },
  
      sexo:{
        type:'string',
        required: true,
        unique: true
      },
  
      FechaNacimiento :{
        type:'string',
        required: false,
        unique: true
      },
  
      /*Colecciones*/
  
      sección: {
  
        type:'colections',
        via:'pertenece'
      },
  
      /*Herencia*/
  
      attachedTo:{
        model: 'user',
      }
  
    }

  }
};

