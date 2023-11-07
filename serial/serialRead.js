const SerialPort = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');
const { getPort } = require('../initConditions.js');


function readData() {
  const parser = getPort().pipe(new ReadlineParser({ delimiter: '\n' }));
  console.log('- Escuchando puerto.')
  parser.on('data', (data) => {
    console.log(data);
  });
};

module.exports = readData;
