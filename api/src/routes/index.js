const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogameRoutes = require('./videogame');
const gendersRoutes = require('./genders');
const platformRoutes = require('./platform');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', videogameRoutes);
router.use('/genders', gendersRoutes);
router.use('/platforms', platformRoutes);


module.exports = router;