const DrugService = require('../services/drug.services');

exports.getDrugDetails = async (req, res, next) => {
  try {
    const { drugName } = req.params;

    const drugDetails = await DrugService.getDrugDetails(drugName);

    res.json({
      status: true,
      success: 'Drug details retrieved successfully',
      data: drugDetails,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: false, error: 'Internal Server Error is there' });
  }
};
