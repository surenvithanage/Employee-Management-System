const router = require('express').Router();

const customerController = require('./customerController');

router.get('/', customerController.list);
router.post('/insert', customerController.save);
router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.update);
router.get('/delete/:id', customerController.delete);

module.exports = router;

