(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './AccountAggregateInfo', './BalancesMap', './Client'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountAggregateInfo'), require('./BalancesMap'), require('./Client'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiDocumentation) {
      root.ApiDocumentation = {};
    }
    root.ApiDocumentation.ClientAggregateInfo = factory(root.ApiDocumentation.ApiClient, root.ApiDocumentation.AccountAggregateInfo, root.ApiDocumentation.BalancesMap, root.ApiDocumentation.Client);
  }
}(this, function(ApiClient, AccountAggregateInfo, BalancesMap, Client) {
  'use strict';

  /**
   * The ClientAggregateInfo model module.
   * @module HedgeableModel/ClientAggregateInfo
   * @version 1.0
   */

  /**
   * Constructs a new <code>ClientAggregateInfo</code>.
   * All information for a particular client
   * @alias module:HedgeableModel/ClientAggregateInfo
   * @class
   */
  var exports = function() {







  };

  /**
   * Constructs a <code>ClientAggregateInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:HedgeableModel/ClientAggregateInfo} obj Optional instance to populate.
   * @return {module:HedgeableModel/ClientAggregateInfo} The populated <code>ClientAggregateInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('accountsInfo')) {
        obj['accountsInfo'] = ApiClient.convertToType(data['accountsInfo'], [AccountAggregateInfo]);
      }
      if (data.hasOwnProperty('additions')) {
        obj['additions'] = ApiClient.convertToType(data['additions'], 'Number');
      }
      if (data.hasOwnProperty('balances')) {
        obj['balances'] = BalancesMap.constructFromObject(data['balances']);
      }
      if (data.hasOwnProperty('client')) {
        obj['client'] = Client.constructFromObject(data['client']);
      }
      if (data.hasOwnProperty('hedgedPercentage')) {
        obj['hedgedPercentage'] = ApiClient.convertToType(data['hedgedPercentage'], 'Number');
      }
      if (data.hasOwnProperty('latestBalance')) {
        obj['latestBalance'] = ApiClient.convertToType(data['latestBalance'], 'Number');
      }
    }
    return obj;
  }


  /**
   * All information for individual accounts of the client
   * @member {Array.<module:HedgeableModel/AccountAggregateInfo>} accountsInfo
   */
  exports.prototype['accountsInfo'] = undefined;

  /**
   * @member {Number} additions
   */
  exports.prototype['additions'] = undefined;

  /**
   * Aggregated balances object for the client
   * @member {module:HedgeableModel/BalancesMap} balances
   */
  exports.prototype['balances'] = undefined;

  /**
   * Client info
   * @member {module:HedgeableModel/Client} client
   */
  exports.prototype['client'] = undefined;

  /**
   * Aggregated hedged percentage of the client
   * @member {Number} hedgedPercentage
   */
  exports.prototype['hedgedPercentage'] = undefined;

  /**
   * Latest aggregate balance of the client
   * @member {Number} latestBalance
   */
  exports.prototype['latestBalance'] = undefined;




  return exports;
}));
