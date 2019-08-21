const router = require('express').Router();

const customerController = require('./customerController');

router.get('/', customerController.list);
router.post('/insert', customerController.save);
router.get('/update/:id', customerController.edit);
router.put('/update/:id', customerController.update);
router.delete('/delete/:id', customerController.delete);

module.exports = router;

