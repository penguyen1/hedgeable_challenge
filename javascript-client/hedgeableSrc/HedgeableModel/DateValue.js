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
    root.ApiDocumentation.DateValue = factory(root.ApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DateValue model module.
   * @module HedgeableModel/DateValue
   * @version 1.0
   */

  /**
   * Constructs a new <code>DateValue</code>.
   * Date-Value Mapping Object
   * @alias module:HedgeableModel/DateValue
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>DateValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:HedgeableModel/DateValue} obj Optional instance to populate.
   * @return {module:HedgeableModel/DateValue} The populated <code>DateValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('additions')) {
        obj['additions'] = ApiClient.convertToType(data['additions'], 'Number');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'Number');
      }
    }
    return obj;
  }


  /**
   * Any additions made on this date. This field is used to indicate additions and withdrawals in a time-series
   * @member {Number} additions
   */
  exports.prototype['additions'] = undefined;

  /**
   * Date
   * @member {String} date
   */
  exports.prototype['date'] = undefined;

  /**
   * Value associated with this date
   * @member {Number} value
   */
  exports.prototype['value'] = undefined;




  return exports;
}));
