const billHistory = require('../controller/billHistoty')
const router = require('express-promise-router')();
const auth = require('../middleware/is_auth')

router.route('/patient/billHistory').post(auth,billHistory.getBillHistory)
router.route('/patient/renderBill').post(auth,billHistory.renderBill)
router.route('/patient/OldBill').post(auth,billHistory.oldBillPrint)
module.exports = router;