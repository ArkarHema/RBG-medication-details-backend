const UserModel = require('../model/user.model')
const UserDetailsModel = require('../model/userDetails.model');
const medicationModel = require('../model/currentmedicine.model');

class UserService{
    static async registerUser(name,phoneNumber){
        try{
            const createUser = new UserModel({ name, phoneNumber });
            const savedUser = await createUser.save();

            const createUserDetails = new UserDetailsModel({ user: savedUser._id });
            const createMedicationDetails = new medicationModel({user:savedUser._id});
            const savedUserDetails = await createUserDetails.save();
            const savedMedicationDetails = await createMedicationDetails.save();

            return { user: savedUser, userDetails: savedUserDetails, medication: savedMedicationDetails };
        }catch(err){
            throw err;
        }
    }

    static async loginUser(name, phoneNumber) {
        try {
          const user = await UserModel.findOne({ name, phoneNumber });
      
          return user;
        } catch (err) {
          throw err;
        }
      }

    static async updateUserDetails(userId, userDetailsData) {
        try {
            console.log("Updating user details for userId:", userId);
        console.log("User details data:", userDetailsData);
            const updatedUserDetails = await UserDetailsModel.findOneAndUpdate(
                { user: userId },
                { $push: { patientHealthDetails: userDetailsData.patientHealthDetails } },
                { new: true }
            );
            console.log("Updated user details:", updatedUserDetails);

        if (!updatedUserDetails) {
            console.log("No user details found for the given userId");
            throw new Error("User details not found for the given userId");
        }
            return updatedUserDetails;
        } catch (err) {
            throw err;
        }
    }

    static async updateMedicationDetails(userId, MedicationData) {
        try {
            console.log("Updating Medication details for userId:", userId);
        console.log("Medication details data:", MedicationData.currentMedications);
            const updatedMedicationDetails = await medicationModel.findOneAndUpdate(
                { user: userId },
                { $push: { currentMedications: MedicationData.currentMedications } },
                { new: true }
            );
            console.log("Updated Medication details:", updatedMedicationDetails);

        if (!updatedMedicationDetails) {
            console.log("No Medication details found for the given userId");
            throw new Error("Medication details not found for the given userId");
        }
            return updatedMedicationDetails;
        } catch (err) {
            throw err;
        }
    }

    static async getHealthDetails(userId) {
        try {
            const userHealthDetails = await UserDetailsModel.findOne({ user: userId });
            console.log(userHealthDetails);
            if (!userHealthDetails) {
                throw new Error("User details not found for the given userId");
            }
            return userHealthDetails.patientHealthDetails;
        } catch (err) {
            throw err;
        }
    }
    
    static async getMedicationDetails(userId) {
        try {
            
            const MedicationDetails = await medicationModel.findOne({ user: userId });
            console.log(MedicationDetails);
            if (!MedicationDetails) {
                throw new Error("User details not found for the given userId");
            }
            return MedicationDetails.currentMedications;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = UserService;