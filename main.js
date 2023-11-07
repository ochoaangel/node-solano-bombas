const { initConditions } = require('./initConditions.js');
const readData = require('./serial/serialRead.js');
const sendString = require('./serial/serialSend');
initConditions()
sendString('ROBOT POWER ON');
readData()  