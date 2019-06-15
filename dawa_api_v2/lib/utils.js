const jwt = require('jsonwebtoken');

module.exports = {
	generateToken: user => {
		const u = {
			_id: user._id,
			name: user.name,
			username: user.username,
			email: user.email
		};
		return (token = jwt.sign(u, 'funciona', {
			expiresIn: 60 * 60 * 24
		}));
	},
	verifyToken: token => {
		return new Promise((resolve, reject) => {
			jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
				if (err) {
					reject(err);
				}
				resolve(user);
			});
		});
	},
	getCleanUser: user => {
		const { password, age, createdAt, updateAt, __v, ...exposedData } = user;
		return exposedData;
	}
};
