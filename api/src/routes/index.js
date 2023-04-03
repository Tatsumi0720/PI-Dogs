const { Router } = require('express');
const dog = require('../handlers/dogHandler');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/dogs', dog);


module.exports = router;
