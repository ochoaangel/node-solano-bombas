const { SerialPort } = require('serialport');

const puerto = process.argv[2];
const velocidad = process.argv[3];

let port;

function initConditions() {
    console.log(`►--------------------------------INICIO---------------------------------`);
    if (!puerto) {
        console.log('► ERROR - Falta el envío del puerto por argumento al ejecutar node, ej: "npm start COM6 115200"')
        process.exit()
    } else {
        console.log(`- Puerto a conectar:       ${puerto}`);
    }
    if (!velocidad) {
        console.log('- Falta el envío de la velocidad por argumento al ejecutar node, se tomará 9600')
    } else {
        console.log(`- Velocidad establecida:   ${velocidad}`);
    }

    port = new SerialPort({ path: puerto, baudRate: parseInt(velocidad) || 9600 });
    port.on('error', (err) => {
        console.log('► ERROR - No se encuentra Disponible el Puerto:', puerto);
        process.exit();
    });
}

function getPort() {
    return port;
}

module.exports = {
    initConditions,
    getPort
};
