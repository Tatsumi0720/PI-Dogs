const { Router } = require("express");
const { Dog, Temperament } = require("../db");
const { getAllDog } = require("../controllers/dogController");

const router = Router();

router.get("/", async (req, res) => {
    const name = req.query.name;
    try {
        const allDogs = await getAllDog();
        if (name) {
            let dogName = await allDogs.filter((e) => e.name.toLowerCase().includes(name.toLowerCase()));
            dogName.length? 
            res.status(200).send(dogName): 
            res.status(404).send("No se encuentra el perro");
        }else {
            res.status(200).send(allDogs);
        }
    } catch (error) {
        res.status(200).send(error.message);
    }
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        if (!id.includes("-")) {
            let dogsAll = await getAllDog();
            if (id) {
                let dogId = await dogsAll.filter((e) => e.id == id);
                dogId.length
                    ? res.status(200).json(dogId)
                    : res.status(404).json("Not found");
            }
        } else {
            let dogs = await Dog.findByPk(id, {
                include: [
                    {
                        model: Temperament,
                        attributes: ["name"],
                        through: {
                            attributes: [],
                        },
                    },
                ],
            });
            var arr = [];
            arr.push(dogs);
            res.status(200).json(arr);
        }
    } catch (error) {
        res.status(404).send(error.message);
    }
});

module.exports = router;
