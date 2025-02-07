const express = require("express");
const { searchController } = require("../controllers/publicController");

const router = express.Router();

router.post("/search", searchController);

module.exports = router;