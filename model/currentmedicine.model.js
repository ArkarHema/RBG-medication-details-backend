const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;

const medicationSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'DetailsOfuser',
        required: true,
        unique: true
    },
    currentMedications: [
        {
            medicationName: String,
            dosage: String
        }
    ],
});

const medicationModel = db.model('CurrentMedications', medicationSchema);

module.exports = medicationModel;