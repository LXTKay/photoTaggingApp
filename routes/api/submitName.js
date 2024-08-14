const express = require('express');
const router = express.Router();
const submitNameController = require("../../controllers/submitNameController");
const tokenVerification = require("./tokenVerification");

router.post("/", tokenVerification, submitNameController.post);

module.exports = router;