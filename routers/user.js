const express = require('express');

const router = express.Router();

// GET
router.get('/all/users', (req, res) => {
	res.status(200).json({
		data: [{
			userFristName: 'Abullha',
		}, {
			userLastName: 'Emran',
		}, {
			userEmail: 'mdemrannazir9999@gmail.com',
		}, {
			userSubEmail: 'emrannazir9999@gmail.com',
		}],
	});
});

module.exports = router;
