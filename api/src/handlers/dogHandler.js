const { Router } = require("express");
const { Dog, Temperament } = require('../db');
const { getAllDog } = require('../controllers/dogController');

const router = Router();

router.get('/', async (req, res) => {
    const { name } = req.query;
    try {
        let allDogs = await getAllDog();
        if (name) {
            let dogName = await allDogs.filter((e) => e.name.toLowerCase().includes(name.toLowerCase()));
            dogName.length ?
                res.status(200).send(dogName) :
                res.status(404).send("No se encuentra el perro");
        } else {
            res.status(200).send(allDogs);
        }
    } catch (error) {
        res.status(200).send(error.message);
    }
});

router.post('/', async (req, res) => {
    
})

module.exports = router;
