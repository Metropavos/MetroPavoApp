/**
 * UserController
 *
 * @description :: Server-side logic for managing User
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
    
    registrar: function(req,res){
        
          
        console.log("entre a funcion");

            user.create({
    
                nombre: req.param('nombre'),
                email: req.param('email'),
                carnet: req.param('carnet'),
                cedula: req.param('cedula'),
                contraseña: req.param('contraseña')

            }).exec( function (err, user) {

                if(user) res.view('homepage', {user : user})
                console.log("este es el usuario",user);
                if (err) return res.serverError(err)

            })
        }
    };



