

// Importaciones y set-up inicial

const mongoose = require('mongoose');
const env = require('dotenv');
env.config();

// Conexión a base de datos

async function connectDB() {
    return await mongoose.connect(process.env.MONGO_URI);

};

// Exportaciones

module.exports = connectDB;