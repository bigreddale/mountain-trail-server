'use strict';

exports.getProducts = function (request, reply) {
	var sql = 'SELECT * FROM products';
	const params = [];

	if (request.query.category) {
		sql += ' WHERE category = ?';
		params.push(request.query.category);
	} else if (request.query.name) {
		sql += ' WHERE name = ?';
		params.push(request.query.name);
	}
	this.db.all(sql, params, function(err, results) {
		if (err) {
			throw err;
		}

		reply(results);
	});

};

exports.getProductById = function (request, reply) {
	this.db.get('SELECT * FROM products WHERE id = ?',
		[request.params.id],
		function(err, result) {
			if (err) {
				throw err;
			}

			if (typeof result !== 'undefined') {
				reply(result);
			} else {
				reply('Not found').code(404);
			}
		});

};
