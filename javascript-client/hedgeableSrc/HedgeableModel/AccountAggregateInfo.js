(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './BalancesMap', './ClientAccount', './Transaction'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BalancesMap'), require('./ClientAccount'), require('./Transaction'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiDocumentation) {
      root.ApiDocumentation = {};
    }
    root.ApiDocumentation.AccountAggregateInfo = factory(root.ApiDocumentation.ApiClient, root.ApiDocumentation.BalancesMap, root.ApiDocumentation.ClientAccount, root.ApiDocumentation.Transaction);
  }
}(this, function(ApiClient, BalancesMap, ClientAccount, Transaction) {
  'use strict';

  /**
   * The AccountAggregateInfo model module.
   * @module HedgeableModel/AccountAggregateInfo
   * @version 1.0
   */

  /**
   * Constructs a new <code>AccountAggregateInfo</code>.
   * All information for a particular client account
   * @alias module:HedgeableModel/AccountAggregateInfo
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>AccountAggregateInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:HedgeableModel/AccountAggregateInfo} obj Optional instance to populate.
   * @return {module:HedgeableModel/AccountAggregateInfo} The populated <code>AccountAggregateInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('account')) {
        obj['account'] = ClientAccount.constructFromObject(data['account']);
      }
      if (data.hasOwnProperty('additions')) {
        obj['additions'] = ApiClient.convertToType(data['additions'], 'Number');
      }
      if (data.hasOwnProperty('balances')) {
        obj['balances'] = BalancesMap.constructFromObject(data['balances']);
      }
      if (data.hasOwnProperty('latestBalance')) {
        obj['latestBalance'] = ApiClient.convertToType(data['latestBalance'], 'Number');
      }
      if (data.hasOwnProperty('transactions')) {
        obj['transactions'] = ApiClient.convertToType(data['transactions'], [Transaction]);
      }
    }
    return obj;
  }


  /**
   * Account for which the info is
   * @member {module:HedgeableModel/ClientAccount} account
   */
  exports.prototype['account'] = undefined;

  /**
   * @member {Number} additions
   */
  exports.prototype['additions'] = undefined;

  /**
   * Balances object for this account
   * @member {module:HedgeableModel/BalancesMap} balances
   */
  exports.prototype['balances'] = undefined;

  /**
   * Latest balance of the account
   * @member {Number} latestBalance
   */
  exports.prototype['latestBalance'] = undefined;

  /**
   * Transactions for this account
   * @member {Array.<module:HedgeableModel/Transaction>} transactions
   */
  exports.prototype['transactions'] = undefined;




  return exports;
}));
