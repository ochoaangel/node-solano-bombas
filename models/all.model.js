const mongoose = require('mongoose');

const allSchema = new mongoose.Schema({

  // ---------------ENTRADAS---------------

  // temperaturas
  b1temp: { type: Number },
  b2temp: { type: Number },
  b3temp: { type: Number },

  // Relé Térmico on/off  true/false
  b1term: { type: Boolean },
  b2term: { type: Boolean },
  b3term: { type: Boolean },

  // Bombas on/off  true/false
  b1on: { type: Boolean },
  b2on: { type: Boolean },
  b3on: { type: Boolean },

  // Distancia ultraSonido:
  dultra: { type: Number },

  // Presión digital:
  pdigital: { type: Number },

  // Presostatos:
  p1: { type: Boolean },
  p2: { type: Boolean },
  p3: { type: Boolean },
  p4: { type: Boolean },

  // Agua flujo:
  fcalle: { type: Number },
  fin: { type: Number },

  // Nivel de agua en el tanque
  nivela1: { type: Boolean },
  nivela2: { type: Boolean },
  nivela3: { type: Boolean },
  nivela4: { type: Boolean },

  // ElectroVálvula de llenado del tanque
  valvulain: { type: Boolean },

  // inFecha (se agrega por default)
  fecha: { type: Date, default: Date.now },

}, { versionKey: false });

const All = mongoose.model('All', allSchema);

module.exports = All;
