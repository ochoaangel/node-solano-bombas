const All = require('../models/all.model');
const { formatResponse } = require("../utils/response.utils");
const { allSchemaValidator, getRangeSchemaValidator } = require('../validations/all.validation');

// ------------------------------ GET ------------------------------
exports.getAll = async (req, res) => {
  try {
    const elements = await All.find();
    res.json(formatResponse(elements));
  } catch (error) {
    res.status(500).json(formatResponse([], 'Error al obtener las variabless'));
  }
};

exports.getRange = async (req, res) => {
  const { error, value } = getRangeSchemaValidator.validate(req.body);

  if (error) {
    res.status(400).json(formatResponse([], error.details.map(detail => detail.message)));
  } else {
    const { from, to } = value;

    if (from >= to) {
      res.status(400).json(formatResponse([], 'La fecha "from" debe ser menor que la fecha "to"'));
    } else {
      try {
        const elements = await All.find({
          fecha: {
            $gte: new Date(from),
            $lte: new Date(to)
          }
        });

        res.json(formatResponse(elements));
      } catch (error) {
        res.status(500).json(formatResponse([], 'Error al obtener los valores entre las fechas'));
      }
    }
  }
};

exports.getLastNotNull = async (req, res) => {
  try {
    const properties = Object.keys(All.schema.paths);

    const lastValidValues = {};

    for (const property of properties) {
      const element = await All.findOne({ [property]: { $exists: true, $ne: null } })
        .sort({ fecha: -1 })
        .select(property)
        .lean();

      if (element && element[property] !== undefined) {
        lastValidValues[property] = element[property];
      }
    }

    res.json(formatResponse(lastValidValues));
  } catch (error) {
    res.status(500).json(formatResponse({}, 'Error al obtener los últimos valores válidos'));
  }
};

exports.getLastWithNull = async (req, res) => {
  try {
    const latestElement = await All.findOne().sort({ fecha: -1 }).lean();
    res.json(formatResponse(latestElement));
  } catch (error) {
    res.status(500).json(formatResponse({}, 'Error al obtener el elemento más reciente'));
  }
};

// ------------------------------ POST ------------------------------


// Controlador para crear un nuevo Registro
exports.create = async (req, res) => {
  try {
    const { error, value } = allSchemaValidator.validate(req.body);
    if (error) {
      res.status(400).json(formatResponse([], error.details.map(detail => detail.message)));
    } else {
      const newElement = new All(value);
      console.log('newElement:', newElement);
      await newElement.save();
      res.json(formatResponse(newElement.id));
    }
  } catch (error) {
    console.log('error', error)
    res.status(500).json(formatResponse([], 'Error al crear la variables'));
  }
};


// Controlador para testear conexión
exports.test = async (req, res) => {
  try {
    res.json(formatResponse("Conexión correcta"));
  } catch (error) {
    res.status(500).json(formatResponse([], 'Error al obtener las variabless'));
  }
};