const Joi = require('joi');

const allSchemaValidator = Joi.object({
    // temperaturas
    b1temp: Joi.number(),
    b2temp: Joi.number(),
    b3temp: Joi.number(),

    // Relé Térmico on/off  true/false
    b1term: Joi.boolean(),
    b2term: Joi.boolean(),
    b3term: Joi.boolean(),

    // Bombas on/off  true/false
    b1on: Joi.boolean(),
    b2on: Joi.boolean(),
    b3on: Joi.boolean(),

    // Distancia ultraSonido
    dultra: Joi.number(),

    // Presión digital
    pdigital: Joi.number(),

    // Presostatos
    p1: Joi.boolean(),
    p2: Joi.boolean(),
    p3: Joi.boolean(),
    p4: Joi.boolean(),

    // Agua flujo
    fcalle: Joi.number(),
    fin: Joi.number(),

    // Nivel de agua en el tanque
    nivela1: Joi.boolean(),
    nivela2: Joi.boolean(),
    nivela3: Joi.boolean(),
    nivela4: Joi.boolean(),

    // ElectroVálvula de llenado del tanque
    valvulain: Joi.boolean(),
    
    // Default
    fecha: Joi.date().default(Date.now)

    // Validar que al menos una llave exista
}).or(
    'b1temp', 'b2temp', 'b3temp',
    'b1term', 'b2term', 'b3term',
    'b1on', 'b2on', 'b3on',
    'dultra',
    'pdigital',
    'p1', 'p2', 'p3', 'p4',
    'fcalle', 'fin',
    'nivela1', 'nivela2', 'nivela3', 'nivela4', 'valvulain');


const getRangeSchemaValidator = Joi.object({
    from: Joi.date().iso().required(),
    to: Joi.date().iso().required()
});


module.exports = {
    allSchemaValidator,
    getRangeSchemaValidator
};