const Message = require("../models/Message");

exports.sendMessage = async (req, res) => {
  const { sender, content, userId } = req.body;
  try {
    const message = await Message.create({ sender, content, userId });
    res.status(201).json({ message });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getMessages = async (req, res) => {
  const { userId } = req.params;
  try {
    const messages = await Message.find({ userId }).sort({ timestamp: 1 });
    res.status(200).json({ messages });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ timestamp: 1 });
    res.status(200).json({ messages });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};