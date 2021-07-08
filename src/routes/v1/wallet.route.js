const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const walletValidation = require('../../validations/wallet.validation');
const walletController = require('../../controllers/wallet.controller');

const router = express.Router();

router
  .route('/history')
  .get(auth('transact'), validate(walletValidation.walletHistory), walletController.walletHistory);

router
  .route('/deposit')
  .post(auth('transact'), validate(walletValidation.walletDeposit), walletController.walletDeposit);

router
  .route('/withdrawal')
  .post(auth('transact'), validate(walletValidation.walletWithdrawal), walletController.walletWithdrawal);

router
  .route('/transfer')
  .post(auth('transact'), validate(walletValidation.walletTransfer), walletController.walletTransfer);


module.exports = router;