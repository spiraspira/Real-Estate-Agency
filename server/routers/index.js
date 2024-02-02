const Router = require('express')
const router = new Router()
const authRouter = require('./authRouter')
const propertyRouter = require('./propertyRouter')
const profileRouter = require('./profileRouter')
const protectedRouter = require("./protectedRouter");
const reviewRouter = require("./reviewRouter");
const contactRouter = require("./contactRouter");
const dealRouter = require("./dealRouter");
const favoriteRouter = require("./favoriteRouter");
const agentRouter = require("./agentRouter");
const authMiddleware = require("../middleware/authMiddleware");

router.use('/auth', authRouter);
router.use('/properties', propertyRouter);
router.use('/agents', agentRouter);
router.use('/profile', profileRouter);
router.use('/reviews', reviewRouter);
router.use('/deals', dealRouter);
router.use('/contacts', contactRouter);
router.use('/favorites', favoriteRouter);
router.use("/api", authMiddleware, protectedRouter);

module.exports = router