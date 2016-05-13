(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Security'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Security'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiDocumentation) {
      root.ApiDocumentation = {};
    }
    root.ApiDocumentation.Holding = factory(root.ApiDocumentation.ApiClient, root.ApiDocumentation.Security);
  }
}(this, function(ApiClient, Security) {
  'use strict';

  /**
   * The Holding model module.
   * @module HedgeableModel/Holding
   * @version 1.0
   */

  /**
   * Constructs a new <code>Holding</code>.
   * Holding Object
   * @alias module:HedgeableModel/Holding
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>Holding</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:HedgeableModel/Holding} obj Optional instance to populate.
   * @return {module:HedgeableModel/Holding} The populated <code>Holding</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('perChange')) {
        obj['perChange'] = ApiClient.convertToType(data['perChange'], 'Number');
      }
      if (data.hasOwnProperty('security')) {
        obj['security'] = Security.constructFromObject(data['security']);
      }
      if (data.hasOwnProperty('shares')) {
        obj['shares'] = ApiClient.convertToType(data['shares'], 'Number');
      }
      if (data.hasOwnProperty('weight')) {
        obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
      }
    }
    return obj;
  }


  /**
   * Dollar amount of the holding
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;

  /**
   * Percentage change of the security
   * @member {Number} perChange
   */
  exports.prototype['perChange'] = undefined;

  /**
   * Security held
   * @member {module:HedgeableModel/Security} security
   */
  exports.prototype['security'] = undefined;

  /**
   * Number of shares of the holding
   * @member {Number} shares
   */
  exports.prototype['shares'] = undefined;

  /**
   * Weight of the holding
   * @member {Number} weight
   */
  exports.prototype['weight'] = undefined;




  return exports;
}));
