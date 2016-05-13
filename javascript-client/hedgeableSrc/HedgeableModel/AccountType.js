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
    root.ApiDocumentation.AccountType = factory(root.ApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AccountType model module.
   * @module HedgeableModel/AccountType
   * @version 1.0
   */

  /**
   * Constructs a new <code>AccountType</code>.
   * Account type object
   * @alias module:HedgeableModel/AccountType
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>AccountType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:HedgeableModel/AccountType} obj Optional instance to populate.
   * @return {module:HedgeableModel/AccountType} The populated <code>AccountType</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }


  /**
   * Id of the account type
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * The actual account type
   * @member {String} type
   */
  exports.prototype['type'] = undefined;




  return exports;
}));
