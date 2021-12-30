const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

const allItemsRoute = require('./items.routes')
router.use('/items', allItemsRoute)

module.exports = router;
