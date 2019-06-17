const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

const SALT_WORK_FACTOR = 10;

const negociosSchema = new Schema(
	{
		nameNegocios: {
			type: String
		},
		descripcion: {
			type: String
		},
		articulos: [],
		puntuacion: {
			type: Number
		}
	},
	{ timestamps: true }
);

negociosSchema.pre('save', function(next) {
	var user = this;

	if (!user.isModified('password')) return next();
	bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
		if (err) return next(err);
		bcrypt.hash(user.password, salt, null, function(err, hash) {
			if (err) return next(err);
			user.password = hash;
			next();
		});
	});
});

negociosSchema.methods.comparePassword = function(candidatePassword) {
	return new Promise((resolve, reject) => {
		bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
			if (err)
				reject({
					error: true,
					message: 'Password required'
				});
			resolve(isMatch);
		});
	});
};

const negocioModel = mongoose.model('negocios', negociosSchema);
module.exports = negocioModel;
