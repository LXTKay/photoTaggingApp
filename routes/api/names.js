const express = require('express');
const router = express.Router();
const namesController = require('../../controllers/namesController');

router.get("/", namesController.get);

module.exports = router;