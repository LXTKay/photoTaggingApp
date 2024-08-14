const express = require('express');
const router = express.Router();
const submitAnswerController = require('../../controllers/submitAnswerController');
const tokenVerification = require("./tokenVerification");

router.post("/", tokenVerification, submitAnswerController.post);

module.exports = router;