const { getSerialPort } = require('../initConditions.js');

function sendString(string) {
    const port = getSerialPort();
    if (port) {
        port.write(string);
    } 
}

module.exports = sendString;
