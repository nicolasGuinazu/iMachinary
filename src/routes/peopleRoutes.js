const express = require('express');
const router = express.Router();
const peopleController = require('../controllers/peopleController');

router.get('/people', peopleController.list);
router.get('/people/:name/actor', peopleController.asActor);
router.get('/people/:name/director', peopleController.asDirector);
router.get('/people/:name/producer', peopleController.asProducer);

module.exports = router; 