const { initConditionsSerialPort } = require('./initConditions.js');
const readData = require('./serial/serialRead.js');
const sendString = require('./serial/serialSend');

initConditionsSerialPort()
sendString('ROBOT POWER ON');
readData()  