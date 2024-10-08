const express = require('express');
const router = express.Router();

// Array to store messages (in memory)
let messages = [];

// @route   GET /chat/messages
// @desc    Get all chat messages
router.get('/messages', (req, res) => {
    res.json(messages);
});

// @route   POST /chat/messages
// @desc    Send a new message
router.post('/messages', (req, res) => {
    const { user, text } = req.body;

    if (!user || !text) {
        return res.status(400).json({ msg: "User and text are required" });
    }

    const newMessage = {
        user,
        text,
        timestamp: new Date().toISOString()
    };

    messages.push(newMessage);
    res.status(201).json(newMessage);
});

// @route   DELETE /chat/messages
// @desc    Delete all messages (for resetting chat)
// Warning: Be cautious with this route in production
router.delete('/messages', (req, res) => {
    messages = [];
    res.status(204).end();
});

module.exports = router;
