const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;

const userDetailsSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'DetailsOfuser',
        required: true,
        unique: true
    },
    patientHealthDetails: [
        {
            details:String
        }
],
});

const UserDetailsModel = db.model('UserHealthDetails', userDetailsSchema);

module.exports = UserDetailsModel;
