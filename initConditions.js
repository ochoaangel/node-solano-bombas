const { SerialPort } = require('serialport');

const portLabel = process.argv[2];
const portSpeed = process.argv[3];

let serialPort;

function initConditionsSerialPort() {
    console.log(`►--------------------------------INICIO---------------------------------`);
    if (!portLabel) {
        console.log('► ERROR - Falta el envío del puerto por argumento al ejecutar node, ej: "npm start COM6 115200"')
        process.exit()
    } else {
        console.log(`- Puerto a conectar:       ${portLabel}`);
    }
    if (!portSpeed) {
        console.log('- Falta el envío de la velocidad por argumento al ejecutar node, se tomará 9600')
    } else {
        console.log(`- Velocidad establecida:   ${portSpeed}`);
    }

    serialPort = new SerialPort({ path: portLabel, baudRate: parseInt(portSpeed) || 9600 });
    serialPort.on('error', (err) => {
        console.log('► ERROR - No se encuentra Disponible el Puerto:', portLabel);
        process.exit();
    });
}

function getSerialPort() {
    return serialPort;
}

module.exports = {
    initConditionsSerialPort,
    getSerialPort
};
