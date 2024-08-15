const asyncHandler = require("express-async-handler");
const prisma = require("../prisma.js");
require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.post = asyncHandler(async (req, res) => {
  let [x, y] = req.body.position;
  const targetName = req.body.name;

  if (typeof +x !== "number"
    || typeof +y !== "number"
    || typeof targetName !== "string") {
    return res.status(400).json({ error: "Invalid input" });
  };

  const target = await prisma.target.findFirst({
    where: {
      name: targetName
    }
  });

  const answer = {
    correctSubmission: false,
    finished: false
  };

  if (Math.abs(x - target.x) <= 50
    && Math.abs(y - target.y) <= 50) {
    answer.correctSubmission = true;
  }

  const progress = req.userData.progress - 1;
  if (progress <= 0) answer.finished = true;

  const payload = {
    progress,
    startTime: req.userData.startTime,
    randomID: req.userData.randomID
  };

  if (answer.finished) {
    payload.endTime = Date.now();
  }

  const token = jwt.sign(
    payload,
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "1h" }
  );

  answer.token = token;

  res.json(answer);
});
