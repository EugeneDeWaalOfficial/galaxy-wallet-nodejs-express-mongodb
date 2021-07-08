const Joi = require('joi');
const { objectId } = require('./custom.validation');

const walletHistory = {
  query: Joi.object().keys({
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const walletDeposit = {
  body: Joi.object().keys({
    amount: Joi.string().required(),
  }),
};

const walletWithdrawal = {
  body: Joi.object().keys({
    amount: Joi.string().required(),
  }),
};

const walletTransfer = {
  body: Joi.object().keys({
    userId: Joi.string().required(),
    amount: Joi.string().required(),
  }),
};

module.exports = {
  walletHistory,
  walletDeposit,
  walletWithdrawal,
  walletTransfer
};
