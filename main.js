const { initConditionsSerialPort } = require('./initConditions.js');
const allController = require('./controllers/all.controller.js');
const sendString = require('./serial/serialSend');
const readData = require('./serial/serialRead.js');

const connectDB = require('./config/database');
const express = require('express');
const router = express.Router();
const app = express();


// /////////////////////////////////////////////////////////////////////////
//  // Init serial port
// /////////////////////////////////////////////////////////////////////////
// initConditionsSerialPort()
// sendString('ROBOT POWER ON');
// readData()
// /////////////////////////////////////////////////////////////////////////

// conecta la BD
connectDB();

// Routes
const allRoutes = require('./routes/all.routes.js');

// Init Express
app.use(express.json());

// Ruta para probar conexión
router.get('/test', allController.test);

// Ruta para los demas endpoints
app.use('/all', allRoutes);

// Servidor activo
app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});