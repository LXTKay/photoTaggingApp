express = require("express");
const router = express.Router();
const highscoreController = require("../../controllers/highscoreController");

router.get("/", highscoreController.get);

module.exports = router;