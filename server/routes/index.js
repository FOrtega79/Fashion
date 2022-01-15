const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

const allItemsRoute = require('./items.routes')
router.use('/items', allItemsRoute)

const uploadImage = require('./uploadImages.routes')
router.use('/upload', uploadImage)

const authRoutes = require('./auth.routes')
router.use('/auth', authRoutes)

module.exports = router;
