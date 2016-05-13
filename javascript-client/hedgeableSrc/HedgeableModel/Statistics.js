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
    root.ApiDocumentation.Statistics = factory(root.ApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Statistics model module.
   * @module HedgeableModel/Statistics
   * @version 1.0
   */

  /**
   * Constructs a new <code>Statistics</code>.
   * Statistics Object
   * @alias module:HedgeableModel/Statistics
   * @class
   */
  var exports = function() {









  };

  /**
   * Constructs a <code>Statistics</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:HedgeableModel/Statistics} obj Optional instance to populate.
   * @return {module:HedgeableModel/Statistics} The populated <code>Statistics</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('all')) {
        obj['all'] = ApiClient.convertToType(data['all'], 'Number');
      }
      if (data.hasOwnProperty('day')) {
        obj['day'] = ApiClient.convertToType(data['day'], 'Number');
      }
      if (data.hasOwnProperty('firstDate')) {
        obj['firstDate'] = ApiClient.convertToType(data['firstDate'], 'String');
      }
      if (data.hasOwnProperty('lastDate')) {
        obj['lastDate'] = ApiClient.convertToType(data['lastDate'], 'String');
      }
      if (data.hasOwnProperty('month')) {
        obj['month'] = ApiClient.convertToType(data['month'], 'Number');
      }
      if (data.hasOwnProperty('month3')) {
        obj['month3'] = ApiClient.convertToType(data['month3'], 'Number');
      }
      if (data.hasOwnProperty('month6')) {
        obj['month6'] = ApiClient.convertToType(data['month6'], 'Number');
      }
      if (data.hasOwnProperty('year')) {
        obj['year'] = ApiClient.convertToType(data['year'], 'Number');
      }
    }
    return obj;
  }


  /**
   * Statistic value since inception
   * @member {Number} all
   */
  exports.prototype['all'] = undefined;

  /**
   * 1 day statistic value
   * @member {Number} day
   */
  exports.prototype['day'] = undefined;

  /**
   * First date of the statistics in the format YYYY-MM-DD
   * @member {String} firstDate
   */
  exports.prototype['firstDate'] = undefined;

  /**
   * Last date of the statistics in the format YYYY-MM-DD
   * @member {String} lastDate
   */
  exports.prototype['lastDate'] = undefined;

  /**
   * 1 month statistic value
   * @member {Number} month
   */
  exports.prototype['month'] = undefined;

  /**
   * 3 month statistic value
   * @member {Number} month3
   */
  exports.prototype['month3'] = undefined;

  /**
   * 6 month statistic value
   * @member {Number} month6
   */
  exports.prototype['month6'] = undefined;

  /**
   * 1 year statistic value
   * @member {Number} year
   */
  exports.prototype['year'] = undefined;




  return exports;
}));
