const express = require('express');
const ProdController = require('../controller/prodController');

const router = express.Router();

router.get('/get-product', ProdController.findAll);

router.post('/create-product', ProdController.createProd);

router.get('/product/:id', ProdController.findById)

module.exports = router;