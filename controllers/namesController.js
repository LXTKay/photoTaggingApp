const asyncHandler = require("express-async-handler");
const prisma = require("../prisma.js");
require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.get = asyncHandler(async (req, res, next) => {

  const targetList = await prisma.target.findMany();
  const nameList = targetList.map((target) => {
    return target.name;
  });

  const startTime = Date.now();
  const randomID = Math.floor(Math.random() * 1000000);
  const progress = nameList.length;
  const token = jwt.sign({ startTime, randomID, progress }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" });

  res.json({ nameList, token });
})