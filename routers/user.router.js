const router = require('express').Router();
const UserController = require("../controller/user.controller");

router.post('/registration',UserController.register);
router.post('/login', UserController.login);
router.put('/update-health-details/:userId', UserController.updateUserDetails);
router.put('/update-medication-details/:userId',UserController.updateMedicationDetails);
router.get('/health-details/:userId', UserController.getHealthDetails);
router.get('/medication-details/:userId', UserController.getMedicationDetails);

module.exports = router;