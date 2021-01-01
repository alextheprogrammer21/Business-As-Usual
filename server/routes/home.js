const express = require('express');
const router = express.Router();
const { auth } = require("../middleware/auth");
const { User } = require("../models/user");
//=================================
//             Home
//=================================

router.get("/", (req, res) => {
    res.status(200).send("Test GET" + req.User);
    // redirect to login if not logged in else home page
    // get user request to check
});

module.exports = router;
