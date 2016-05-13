(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiDocumentation) {
      root.ApiDocumentation = {};
    }
    root.ApiDocumentation.Transaction = factory(root.ApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Transaction model module.
   * @module HedgeableModel/Transaction
   * @version 1.0
   */

  /**
   * Constructs a new <code>Transaction</code>.
   * Transaction Object
   * @alias module:HedgeableModel/Transaction
   * @class
   */
  var exports = function() {











  };

  /**
   * Constructs a <code>Transaction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:HedgeableModel/Transaction} obj Optional instance to populate.
   * @return {module:HedgeableModel/Transaction} The populated <code>Transaction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('accountId')) {
        obj['accountId'] = ApiClient.convertToType(data['accountId'], 'Integer');
      }
      if (data.hasOwnProperty('clientId')) {
        obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Integer');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('percentage')) {
        obj['percentage'] = ApiClient.convertToType(data['percentage'], 'Number');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
      }
      if (data.hasOwnProperty('securityId')) {
        obj['securityId'] = ApiClient.convertToType(data['securityId'], 'Integer');
      }
      if (data.hasOwnProperty('signal')) {
        obj['signal'] = ApiClient.convertToType(data['signal'], 'String');
      }
      if (data.hasOwnProperty('ticker')) {
        obj['ticker'] = ApiClient.convertToType(data['ticker'], 'String');
      }
    }
    return obj;
  }


  /**
   * Account id
   * @member {Integer} accountId
   */
  exports.prototype['accountId'] = undefined;

  /**
   * Client id
   * @member {Integer} clientId
   */
  exports.prototype['clientId'] = undefined;

  /**
   * Transaction date
   * @member {String} date
   */
  exports.prototype['date'] = undefined;

  /**
   * Transaction id
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Percentage of the portfolio traded
   * @member {Number} percentage
   */
  exports.prototype['percentage'] = undefined;

  /**
   * Transaction price
   * @member {Number} price
   */
  exports.prototype['price'] = undefined;

  /**
   * Number of shares traded
   * @member {Number} quantity
   */
  exports.prototype['quantity'] = undefined;

  /**
   * Id of the security traded
   * @member {Integer} securityId
   */
  exports.prototype['securityId'] = undefined;

  /**
   * Trade signal. BUY, SELL
   * @member {String} signal
   */
  exports.prototype['signal'] = undefined;

  /**
   * Ticker of the security traded
   * @member {String} ticker
   */
  exports.prototype['ticker'] = undefined;




  return exports;
}));
