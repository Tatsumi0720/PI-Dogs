const { Router } = require('express');
const dog = require('../handlers/dogHandler');
const temperament = require('../handlers/temperamentHandler');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/dogs', dog);
router.use('/temperaments', temperament);


module.exports = router;
