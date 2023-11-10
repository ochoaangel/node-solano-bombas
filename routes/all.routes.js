const express = require('express');
const allController = require('../controllers/all.controller');
const router = express.Router();

// Ruta para crear nuevos registros
router.post('/', allController.create);

// Ruta para obtener Registros
router.get('/getAll', allController.getAll);
router.get('/getRange', allController.getRange);
router.get('/getLastNotNull', allController.getLastNotNull);
router.get('/getLastWithNull', allController.getLastWithNull);

// Ruta para probar conexión
router.get('/test', allController.test);

module.exports = router;
