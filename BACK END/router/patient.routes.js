const express = require('express');
const router = express.Router();
const Caseform = require('../models/caseform'); // your Caseform model
const { verifyTokenAndAutharization, verifyToken } = require('./verifyToken.routes');
// import your auth middleware

// POST request to add a new patient case
router.post('/patients', verifyTokenAndAutharization, async (req, res) => {
    const { name, dateOfBirth, address, phoneNumber, smoke, drink, prenent, bloodPressure, medicins, contagiousDiseases, psychologicalDisorder, physicalInjury, img } = req.body;

    const newCase = new Caseform({
        name,
        dateOfBirth,
        address,
        phoneNumber,
        smoke,
        drink,
        prenent,
        bloodPressure,
        medicins,
        contagiousDiseases,
        psychologicalDisorder,
        physicalInjury,
        img
    });

    try {
        const savedCase = await newCase.save();
        res.status(200).json(savedCase);
    } catch (err) {
        return res.status(500).json(err);
    }
});



// PUT - Update an existing patient record
router.put("/patients/:caseId", async (req, res) => {

    try {
        const { caseId } = req.params;
        const newCase = req.body;
        console.log({ newCase });
        const caseForm = await Caseform.findByIdAndUpdate(
            caseId,
            newCase,
            { new: true }
        );
        if (!caseForm) {
            return res.status(404).json({ error: "Task not found" });
        }
        res.json(caseForm);
    } catch (error) {
        res.status(500).json({ error: "Failed to update task" });
    }
});

// DELETE - Delete a patient record
router.delete('/patients/:caseId', async (req, res) => {
    try {

        const { caseId } = req.params;
        const deleteCase = await Caseform.findByIdAndDelete(caseId);

        if (!deleteCase) {
            return res.status(404).send('Patient not found');
        }
        res.json({ message: "succes" })

    } catch (err) {
        res.status(500).json({ error: "faild" })
    }
});

module.exports = router;
