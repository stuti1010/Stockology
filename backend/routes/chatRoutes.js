const express = require("express");
const { sendMessage, getMessages,getAllMessages } = require("../controllers/chatController");

const router = express.Router();

router.post("/send", sendMessage);
router.get("/:userId", getMessages);
router.get("/", getAllMessages);

module.exports = router;