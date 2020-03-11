const express = require('express');

const router = express.Router();

// GET
router.get('/all', (req, res) => {
	res.status(200).json({
		data: [{
			userFristName: 'Emran',
		}, {
			userLastName: 'Nazir',
		}],
	});
});

module.exports = router;
