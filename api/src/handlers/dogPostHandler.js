const express = require('express')
const router = express.Router();
const { Dog, Temperament } = require('../db')

router.post("/", async (req, res) => {
    const { name, min_weight, max_weight, min_height, max_height, life_span, image, temperament, createDB } = req.body;

    const exactHeight = [];
    const minHeight = min_height;
    const maxHeight = max_height;
    exactHeight.push(minHeight, maxHeight);

    const exactWeight = [];
    const minWeight = min_weight;
    const maxWeight = max_weight;
    exactWeight.push(minWeight, maxWeight);


    try {
        if (!name || !life_span || !image || !temperament) {
            return res.send("Faltan parametros");
        }

        const findDog = await Dog.findAll({
            where: { name: name },
        });

        if (findDog.length != 0) {
            return res.send("El perro ya existe! ");
        }

        let dogCreate = await Dog.create({
            name,
            life_span,
            weight: exactWeight,
            height: exactHeight,
            image,
        });

        let tempsDB = await Temperament.findAll({
            where: { name: temperament },
        });
        
        for (let i = 0; i < tempsDB.length; i++) {
            let tempDB = tempsDB[i];
            dogCreate.addTemperament(tempDB);
        }
        res.send("Dog created successfully");
    } catch (error) {
        res.status(400).send(error.message);
        console.log(error.message);
    }
});

module.exports = router;