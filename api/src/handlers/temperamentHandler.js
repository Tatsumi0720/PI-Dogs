const express = require('express');
const router = express.Router();
const { getTemperament } = require('../controllers/temperamentController');

router.get('/', async (req, res) => {
    try {
        const tempAll = await getTemperament();
        res.status(200).json(tempAll);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports = router;