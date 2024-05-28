const router = require('express').Router();
const DrugController = require('../controller/drug.controller');

router.get('/drug-details/:drugName', DrugController.getDrugDetails);

module.exports = router;
