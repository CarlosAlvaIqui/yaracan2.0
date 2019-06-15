const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const petSchema = new Schema(
	{
		petname: {
			type: String,
			required: true,
			index: true
		},
		sexo: {
			type: String,
			enum: ['F', 'M']
		},
		raza: {
			type: String
		},
		descripcion: {
			type: String
		},
		urlImage: {
			type: String
		},
		userPost: []
	},
	{ timestamps: true }
);

const petModel = mongoose.model('pets', petSchema);
module.exports = petModel;
