const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

const allItemsRoute = require('./items.routes')
router.use('/items', allItemsRoute)

const uploadImage = require('./uploadImages.routes')
router.use('/upload', uploadImage)

const authRoutes = require('./auth.routes')
router.use('/auth', authRoutes)

module.exports = router;
