/**
 * Periodo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {



  createdAt:false,
  updatedAt:false,

  attributes: {
  
        idPeriodo: {
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
            size: 6
          },

/*Colecciones*/

  /* referencia estudiante - periodo (N - M) */

        estudiantes: {
            collection: 'estudiante',
            via: 'periodos'
          },

  /* referencia seccion - periodo (N - 1) */
        
        secciones:{
            collection:'seccion',
            via:'trimestre'
        }

  }
};

