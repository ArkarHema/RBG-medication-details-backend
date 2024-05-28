const mongoose = require('mongoose');
const db = require('../config/db')

const { Schema } = mongoose;

const drugDetailsSchema = new Schema({
    drugName:{
        type:String,
        required:true,
        unique:true
    },
    sideEffects:{
        type:String,
        required:true
    },
    dosagePreferred:{
        type:String,
    },
    category:{
        type:String,
        required:true
    }
});

const DrugDetailsModel = db.model('DrugDetails',drugDetailsSchema);

module.exports = DrugDetailsModel;