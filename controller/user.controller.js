const UserService = require('../services/user.services');

exports.register = async(req,res,next)=>{
    try{
        const {name,phoneNumber} = req.body;
        const { user, userDetails, medication } = await UserService.registerUser(name, phoneNumber);
        res.json({status:true,success:"User registered successfully", data: { user, userDetails, medication}   });
    }catch(err){
        throw err;
    }
};

exports.login = async (req, res, next) => {
    try {
      const { name, phoneNumber } = req.body;
      const user = await UserService.loginUser(name, phoneNumber);
  
      if (user) {
        res.json({
          status: true,
          success: "Login successful",
          data: { user },
        });
      } else {
        res.json({
          status: false,
          success: "Login failed",
        });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ status: false, error: "Internal Server Error" });
    }
  };

exports.updateUserDetails = async (req, res, next) => {
    try {
        console.log("req.params:", req.params);
        const userId = Object.values(req.params)[0];
        const userDetailsData = req.body;
        const updatedUserDetails = await UserService.updateUserDetails(userId, userDetailsData);

        res.json({ status: true, success: "User details updated successfully", data: updatedUserDetails });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: false, error: "Internal Server Error" });
    }
};

exports.updateMedicationDetails = async (req, res, next) => {
    try {
        console.log("req.params:", req.params);
        const userId = Object.values(req.params)[0];
        const MedicationData = req.body;
        const updatedMedicationDetails = await UserService.updateMedicationDetails(userId, MedicationData);

        res.json({ status: true, success: "Medication details updated successfully", data: updatedMedicationDetails });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: false, error: "Internal Server Error" });
    }
};

exports.getHealthDetails = async (req, res, next) => {
    try {
        const userId = Object.values(req.params)[0];
        const healthDetails = await UserService.getHealthDetails(userId);
        res.json({ status: true, data: healthDetails });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: false, error: "Internal Server Error" });
    }
};

exports.getMedicationDetails = async (req, res, next) => {
    try {
        const userId = Object.values(req.params)[0];
        const medicationDetails = await UserService.getMedicationDetails(userId);
        res.json({ status: true, data: medicationDetails });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: false, error: "Internal Server Error" });
    }
};