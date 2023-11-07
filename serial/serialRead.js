const SerialPort = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');
const { getSerialPort } = require('../initConditions.js');


function readData() {
  const parser = getSerialPort().pipe(new ReadlineParser({ delimiter: '\n' }));
  console.log('- Escuchando puerto.')
  parser.on('data', (data) => {
    console.log(data);
  });
};

module.exports = readData;
