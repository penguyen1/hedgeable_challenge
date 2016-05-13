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
    root.ApiDocumentation.Security = factory(root.ApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Security model module.
   * @module HedgeableModel/Security
   * @version 1.0
   */

  /**
   * Constructs a new <code>Security</code>.
   * Security Object
   * @alias module:HedgeableModel/Security
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>Security</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:HedgeableModel/Security} obj Optional instance to populate.
   * @return {module:HedgeableModel/Security} The populated <code>Security</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('assetClass')) {
        obj['assetClass'] = ApiClient.convertToType(data['assetClass'], 'String');
      }
      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = ApiClient.convertToType(data['customFields'], Object);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('ticker')) {
        obj['ticker'] = ApiClient.convertToType(data['ticker'], 'String');
      }
    }
    return obj;
  }


  /**
   * Asset class of the security
   * @member {String} assetClass
   */
  exports.prototype['assetClass'] = undefined;

  /**
   * A JSON String of name - value pairs
   * @member {Object} customFields
   */
  exports.prototype['customFields'] = undefined;

  /**
   * Id of the security
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Name of the security
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * Ticker of the security
   * @member {String} ticker
   */
  exports.prototype['ticker'] = undefined;




  return exports;
}));
