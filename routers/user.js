const express = require('express');

const router = express.Router();

// GET
router.get('/all/users', (req, res) => {
	res.status(200).json({
		data: [{
			userFristName: 'Abullha',
		}, {
			userLastName: 'Emran',
		}],
	});
});

module.exports = router;
