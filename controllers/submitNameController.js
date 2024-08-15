const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const prisma = require("../prisma.js");

exports.post = [
  body("name")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Name must have at least 3 characters")
    .isLength({ max: 10 })
    .withMessage("Name can have max. 15 characters")
    .escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ errors: errors.array(), message: "Validation failed!", success: false });
      return;
    };
    const totalTime = +(((+req.userData.endTime - +req.userData.startTime) / 1000).toFixed(3));
    const name = await prisma.user.create({
      data: {
        name: req.body.name,
        time: totalTime
      }
    });

    if (!name) {
      res.json({ success: false, message: "Database Problem" });
      return;
    };

    res.json({ message: "Name submitted successfully", success: true });
  })
]
