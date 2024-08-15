const express = require('express');
const router = express.Router();

const names = require("./api/names");
const submitAnswer = require("./api/submitAnswer");
const submitName = require("./api/submitName");
const highscore = require("./api/highscore");

router.use("/names", names);
router.use("/submitAnswer", submitAnswer);
router.use("/submitName", submitName);
router.use("/highscore", highscore);

module.exports = router;