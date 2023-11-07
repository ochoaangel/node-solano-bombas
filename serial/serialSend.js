const { getPort } = require('../initConditions.js');

function sendString(string) {
    const port = getPort();
    if (port) {
        port.write(string);
    } 
}

module.exports = sendString;
