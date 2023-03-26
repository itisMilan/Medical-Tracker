const express = require("express")
const router = express.Router()
const authController = require("../controllers/auth")
const homeController = require("../controllers/home")
const accountsController = require("../controllers/accounts")
const { ensureAuth, ensureGuest } = require("../middleware/auth")

// Main Routes
router.post("/login", authController.postLogin)
router.post("/signup", authController.postSignup)

module.exports = router
