const utils = require('../lib/utils');
const Pet = require('../models/pets');

const exposedFields = [
	'petname',
	'sexo',
	'raza',
	'descripcion',
	'urlImage',
	'userPost'
];

module.exports = {
	create: (req, res, next) => {
		var pet = new Pet({
			...req.body
		});
		pet
			.save()
			.then(result => {
				res.status(200).json({
					message: 'Mascota creada',
					data: {
						...result['_doc']
					}
				});
			})
			.catch(err => {
				console.log(err);
				res.status(500).json({
					error: err
				});
			});
	},
	find: (req, res, next) => {
		Pet.find()
			.exec()
			.then(docs => {
				const response = {
					count: docs.length,
					data: docs.map(doc => {
						return { subData: doc['_doc'] };
					})
				};
				res.status(200).json(response);
			})
			.catch(err => {
				console.log(err);
				res.status(500).json({
					error: err
				});
			});
	},
	findOne: (req, res, next) => {
		const id = req.params.id;
		Pet.findById(id)
			.exec()
			.then(doc => {
				if (doc) {
					res.status(200).json({
						data: doc['_doc']
					});
				} else {
					res
						.status(404)
						.json({ message: 'No valid entry found for provided ID' });
				}
			})
			.catch(err => {
				console.log(err);
				res.status(500).json({
					error: err
				});
			});
	},
	update: (req, res, next) => {
		const id = rea.params.id;
		let updateParams = {
			...req.body
		};
		User.update({ _id: id }, { $set: updateParams })
			.exec()
			.then(result => {
				res.status(200).json({
					message: 'User update!',
					data: result['_doc']
				});
			})
			.catch(err => {
				console.log(err);
				res.status(500).json({
					error: err
				});
			});
	},
	delete: (req, res, next) => {
		const id = req.params.id;
		User.remove({ _id: id })
			.exec()
			.then(result => {
				res.status(200).json({
					message: 'User deleted!'
				});
			})
			.catch(err => {
				console.log(err);
				res.status(500).json({
					error: err
				});
			});
	}
};
