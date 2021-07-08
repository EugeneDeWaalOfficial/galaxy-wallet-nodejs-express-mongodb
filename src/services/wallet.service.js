const { Wallet } = require('../models');

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
 const walletHistory = async (filter, options) => {
  const wallet = await Wallet.paginate(filter, options);
  return wallet;
};

/**
 * Deposit to user
 * @param {Object} walletBody
 * @returns {Promise<Wallet>}
 */
 const walletDeposit = async (walletBody) => {  
  const wallet = await Wallet.create(walletBody);
  return wallet;
};

/**
 * Withdrawal from user
 * @param {Object} walletBody
 * @returns {Promise<Wallet>}
 */
 const walletWithdrawal = async (walletBody) => {  
  const wallet = await Wallet.create(walletBody);
  return wallet;
};

/**
 * Transfer from user
 * @param {Object} walletBody
 * @returns {Promise<Wallet>}
 */
 const walletTransfer = async (walletBody) => {  
  const wallet = await Wallet.create(walletBody);
  return wallet;
};

module.exports = {
  walletHistory,
  walletDeposit,  
  walletWithdrawal,
  walletTransfer
};
