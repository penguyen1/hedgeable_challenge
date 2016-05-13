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
    root.ApiDocumentation.Country = factory(root.ApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Country model module.
   * @module HedgeableModel/Country
   * @version 1.0
   */

  /**
   * Constructs a new <code>Country</code>.
   * Country Object
   * @alias module:HedgeableModel/Country
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>Country</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:HedgeableModel/Country} obj Optional instance to populate.
   * @return {module:HedgeableModel/Country} The populated <code>Country</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('code2')) {
        obj['code2'] = ApiClient.convertToType(data['code2'], 'String');
      }
      if (data.hasOwnProperty('code3')) {
        obj['code3'] = ApiClient.convertToType(data['code3'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }


  /**
   * 2 letter code of the country
   * @member {String} code2
   */
  exports.prototype['code2'] = undefined;

  /**
   * 3 letter code of the country
   * @member {String} code3
   */
  exports.prototype['code3'] = undefined;

  /**
   * Name of the country
   * @member {String} name
   */
  exports.prototype['name'] = undefined;




  return exports;
}));
