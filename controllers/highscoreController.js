const asyncHandler = require("express-async-handler");
const prisma = require("../prisma.js");
require("dotenv").config();

exports.get = asyncHandler(async (req, res, next) => {
  const highScoreList = await prisma.user.findMany({
    orderBy: {
      time: "asc",
    },
    take: 5,
  });

  res.json({ highScore: highScoreList });
});
