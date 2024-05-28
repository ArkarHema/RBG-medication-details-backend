const DrugDetailsModel = require('../model/drugDetails.model');

class DrugService {
  static async getDrugDetails(drugName) {
    try {
      const drugDetails = await DrugDetailsModel.findOne({ drugName });
      console.log(drugDetails);
      if (!drugDetails) {
        throw new Error('Drug details not found for the given drug name');
      }
      const { sideEffects, dosagePreferred, category } = drugDetails;
      console.log(drugDetails);
      return {
        //drugDetails
        drugName,
        sideEffects,
        dosagePreferred,
        category,
      };
    } catch (err) {
      throw err;
    }
  }
}

module.exports = DrugService;
