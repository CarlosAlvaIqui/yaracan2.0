const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const SALT_WORK_FACTOR = 10;

//Creando una funcion para validar el email del usuario
const validateEmail = function(email){
    const correo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return correo.test(email);
};

//Pueden buscar para que es un Schema y las propiedades que puede tener
//https://mongoosejs.com/docs/schematypes.html#string-validators

const userSchema = new Schema({
    username: {
        type: String, //Este es para el tipo de dato en este caso String
        trim: true, //Trim sirve para quitar los espacios a una palabra
        required: true, //Required sirve para que el campo NAME debe si o si tener datos
        match: [/^[a-zA-Z0-9]+$/, 'Es invalido su Username'], //Sirve para verificar que cumple con la matriz
        index: true, //Sirve para definir un indice a este campo USERNAME
        unique: true //Sirve para que el indice sea unico y no se repita
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        unique: true,
        validate: [validateEmail, 'Tu email es invalido']
    }
}, {timestamps: true}); //TimesTamps sirve para generar marca de tiempo (a que hora se uso el Schema)

userSchema.pre('save', function(next){
    var user = this;

    if(!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_WORK_FACTOR,function(err,salt){
        if (err) return next(err);

        bcrypt.hash(user.password, salt, null, function(err, hash){
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function(candidatePassword){
    return new Promise((resolve,reject) => {
        bcrypt.compare(candidatePassword, this.password, (err,isMatch) =>{
            if(err) reject({error: true, message:'Password es requerido'});
            resolve(isMatch);
        });
    })
};

const userModel = mongoose.model('users',userSchema);
module.exports = userModel;

//exportando el esquema userSchema
module.exports = userSchema;