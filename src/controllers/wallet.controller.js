const httpStatus = require('http-status');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const ApiError = require('../utils/ApiError');
const { walletService, userService } = require('../services');

const walletHistory = catchAsync(async (req, res) => {
  const filter = { userId: req.user._id }
  const options = pick(req.query, ['limit', 'page']);
  const result = await walletService.walletHistory(filter, options);
  res.send(result);
});

const walletDeposit = catchAsync(async (req, res) => {
  req.body.userId = req.user._id;
  const wallet = await walletService.walletDeposit(req.body);
  res.status(httpStatus.CREATED).send(wallet);
});

const walletWithdrawal = catchAsync(async (req, res) => {
  req.body.userId = req.user._id;
  req.body.amount = req.body.amount*-1;
  const wallet = await walletService.walletWithdrawal(req.body);
  res.status(httpStatus.CREATED).send(wallet);
});

const walletTransfer = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.body.userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }else{
    //get sum value of 
    let walletValue = await walletService.getWalletValue(req.user._id)
    if(walletValue[0].amount>req.body.amount){
      let wallet = await walletService.walletTransfer(req.body);
      req.body.userId = req.user._id;
      req.body.amount = req.body.amount*-1;
      wallet = await walletService.walletWithdrawal(req.body);
      res.status(httpStatus.CREATED).send(wallet);
    }else{
      throw new ApiError(httpStatus.NOT_ACCEPTABLE, 'Not enough funds');
    }    
  }  
});


module.exports = {
  walletHistory,
  walletDeposit,  
  walletWithdrawal,
  walletTransfer
};
