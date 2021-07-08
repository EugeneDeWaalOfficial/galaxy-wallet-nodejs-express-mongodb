const Joi = require('joi');
const { objectId } = require('./custom.validation');

const walletHistory = {
  query: Joi.object().keys({
    userId: Joi.string(),
    amount: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const walletDeposit = {
  body: Joi.object().keys({
    userId: Joi.string().required(),
    amount: Joi.string().required(),
  }),
};

const walletWithdrawal = {
  body: Joi.object().keys({
    userId: Joi.string().required(),
    amount: Joi.string().required(),
  }),
};

// const walletTransfer = {
//   params: Joi.object().keys({
//     userId: Joi.required().custom(objectId),
//   }),
//   body: Joi.object().keys({
//     userId: Joi.string().required(),
//     amount: Joi.string().required(),
//   }),
// };

module.exports = {
  walletHistory,
  walletDeposit,
  walletWithdrawal
};
