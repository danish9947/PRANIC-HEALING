
const express = require('express');
const router = express.Router();
const CryptoJs = require('crypto-js');
const { verifyToken, verifyTokenAndAdmin, verifyTokenAndAutharization } = require('./verifyToken.routes');
const user = require('../models/User');
const User = require('../models/User');

// UPDATE USER DATA
router.put("/:id", verifyToken, async (req, res) => {
    if (req.body.password) {
        req.body.password = CryptoJs.AES.encrypt(req.body.password, process.env.PASS_SEC).toString();
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true },
        );
        res.status(200).json(updatedUser);
    } catch (err) {
        return res.status(500).json(err);
    }
});

// delete user

router.delete("/:id", verifyTokenAndAutharization, async (req, res) => {

    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("user has been deleted");

    } catch (err) {
        res.status(500).json(err);
    }
});

// find one user

router.get("/find/:id", verifyTokenAndAutharization, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json("User not found");
        }
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
});

// all users

router.get("/all", verifyTokenAndAdmin, async (req, res) => {
    const query = req.query.new;

    try {
        const allUsers = query
            ? await User.find().sort({ _id: -1 }).limit(5)
            : await User.find();
        res.status(200).json(allUsers);
    } catch (err) {
        res.status(500).json(err);
    }
});

//get user stats 

router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))

    try {
        const data = await User.aggregate([{ $match: { createdAt: { $gte: lastYear } } },
        {
            $project: {
                month: { $month: "$createdAt" },
            },
        },
        {
            $group: {
                _id: "$month",
                total: { $sum: 1 }
            },
        },
        ]);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;

