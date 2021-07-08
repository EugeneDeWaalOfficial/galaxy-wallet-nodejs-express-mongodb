const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { walletService } = require('../services');


const walletHistory = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['userId']);
  const options = pick(req.query, ['limit', 'page']);
  const result = await walletService.walletHistory(filter, options);
  res.send(result);
});

const walletDeposit = catchAsync(async (req, res) => {
  const wallet = await walletService.walletDeposit(req.body);
  res.status(httpStatus.CREATED).send(wallet);
});

const walletWithdrawal = catchAsync(async (req, res) => {
  const wallet = await walletService.walletWithdrawal(req.body);
  res.status(httpStatus.CREATED).send(wallet);
});



module.exports = {
  walletHistory,
  walletDeposit,  
  walletWithdrawal
};
