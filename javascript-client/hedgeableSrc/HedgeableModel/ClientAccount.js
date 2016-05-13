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
    root.ApiDocumentation.ClientAccount = factory(root.ApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ClientAccount model module.
   * @module HedgeableModel/ClientAccount
   * @version 1.0
   */

  /**
   * Constructs a new <code>ClientAccount</code>.
   * Client Account Object
   * @alias module:HedgeableModel/ClientAccount
   * @class
   */
  var exports = function() {









  };

  /**
   * Constructs a <code>ClientAccount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:HedgeableModel/ClientAccount} obj Optional instance to populate.
   * @return {module:HedgeableModel/ClientAccount} The populated <code>ClientAccount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('allocationId')) {
        obj['allocationId'] = ApiClient.convertToType(data['allocationId'], 'Integer');
      }
      if (data.hasOwnProperty('clientId')) {
        obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Integer');
      }
      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = ApiClient.convertToType(data['customFields'], Object);
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('hedgedPercentage')) {
        obj['hedgedPercentage'] = ApiClient.convertToType(data['hedgedPercentage'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * Allocation id of the client account
   * @member {Integer} allocationId
   */
  exports.prototype['allocationId'] = undefined;

  /**
   * Id of the client
   * @member {Integer} clientId
   */
  exports.prototype['clientId'] = undefined;

  /**
   * A JSON String of name - value pairs
   * @member {Object} customFields
   */
  exports.prototype['customFields'] = undefined;

  /**
   * Client account dscription
   * @member {String} description
   */
  exports.prototype['description'] = undefined;

  /**
   * Hedged percentage of the account
   * @member {Number} hedgedPercentage
   */
  exports.prototype['hedgedPercentage'] = undefined;

  /**
   * Client account id
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Client account name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * Account type id of the client account
   * @member {Integer} type
   */
  exports.prototype['type'] = undefined;




  return exports;
}));
