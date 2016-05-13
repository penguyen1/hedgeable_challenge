(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './DateValue', './Holding', './Statistics'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DateValue'), require('./Holding'), require('./Statistics'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiDocumentation) {
      root.ApiDocumentation = {};
    }
    root.ApiDocumentation.BalancesMap = factory(root.ApiDocumentation.ApiClient, root.ApiDocumentation.DateValue, root.ApiDocumentation.Holding, root.ApiDocumentation.Statistics);
  }
}(this, function(ApiClient, DateValue, Holding, Statistics) {
  'use strict';

  /**
   * The BalancesMap model module.
   * @module HedgeableModel/BalancesMap
   * @version 1.0
   */

  /**
   * Constructs a new <code>BalancesMap</code>.
   * @alias module:HedgeableModel/BalancesMap
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>BalancesMap</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:HedgeableModel/BalancesMap} obj Optional instance to populate.
   * @return {module:HedgeableModel/BalancesMap} The populated <code>BalancesMap</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('balances')) {
        obj['balances'] = ApiClient.convertToType(data['balances'], [DateValue]);
      }
      if (data.hasOwnProperty('holdings')) {
        obj['holdings'] = ApiClient.convertToType(data['holdings'], [Holding]);
      }
      if (data.hasOwnProperty('returns')) {
        obj['returns'] = ApiClient.convertToType(data['returns'], [DateValue]);
      }
      if (data.hasOwnProperty('stats')) {
        obj['stats'] = Statistics.constructFromObject(data['stats']);
      }
    }
    return obj;
  }


  /**
   * @member {Array.<module:HedgeableModel/DateValue>} balances
   */
  exports.prototype['balances'] = undefined;

  /**
   * @member {Array.<module:HedgeableModel/Holding>} holdings
   */
  exports.prototype['holdings'] = undefined;

  /**
   * @member {Array.<module:HedgeableModel/DateValue>} returns
   */
  exports.prototype['returns'] = undefined;

  /**
   * @member {module:HedgeableModel/Statistics} stats
   */
  exports.prototype['stats'] = undefined;




  return exports;
}));
