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
    root.ApiDocumentation.Client = factory(root.ApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Client model module.
   * @module HedgeableModel/Client
   * @version 1.0
   */

  /**
   * Constructs a new <code>Client</code>.
   * Client Object
   * @alias module:HedgeableModel/Client
   * @class
   */
  var exports = function() {












  };

  /**
   * Constructs a <code>Client</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:HedgeableModel/Client} obj Optional instance to populate.
   * @return {module:HedgeableModel/Client} The populated <code>Client</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = ApiClient.convertToType(data['customFields'], Object);
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('hasFundedAccount')) {
        obj['hasFundedAccount'] = ApiClient.convertToType(data['hasFundedAccount'], 'Integer');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('loginId')) {
        obj['loginId'] = ApiClient.convertToType(data['loginId'], 'String');
      }
      if (data.hasOwnProperty('loginType')) {
        obj['loginType'] = ApiClient.convertToType(data['loginType'], 'String');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('token')) {
        obj['token'] = ApiClient.convertToType(data['token'], 'String');
      }
    }
    return obj;
  }


  /**
   * 2 letter country code of the client
   * @member {String} country
   */
  exports.prototype['country'] = undefined;

  /**
   * A JSON String of name - value pairs
   * @member {Object} customFields
   */
  exports.prototype['customFields'] = undefined;

  /**
   * Email of the client
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * First name of the client
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;

  /**
   * Flag to indicate if the client has a funded account
   * @member {Integer} hasFundedAccount
   */
  exports.prototype['hasFundedAccount'] = undefined;

  /**
   * Id of the client
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Last name of the client
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;

  /**
   * Login id of the client
   * @member {String} loginId
   */
  exports.prototype['loginId'] = undefined;

  /**
   * Login type of the client
   * @member {String} loginType
   */
  exports.prototype['loginType'] = undefined;

  /**
   * Phone number of the client
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;

  /**
   * Token active for this session of the client
   * @member {String} token
   */
  exports.prototype['token'] = undefined;




  return exports;
}));
