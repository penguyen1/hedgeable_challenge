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
    root.ApiDocumentation.Notification = factory(root.ApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Notification model module.
   * @module HedgeableModel/Notification
   * @version 1.0
   */

  /**
   * Constructs a new <code>Notification</code>.
   * Notification Object
   * @alias module:HedgeableModel/Notification
   * @class
   */
  var exports = function() {








  };

  /**
   * Constructs a <code>Notification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:HedgeableModel/Notification} obj Optional instance to populate.
   * @return {module:HedgeableModel/Notification} The populated <code>Notification</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('accountId')) {
        obj['accountId'] = ApiClient.convertToType(data['accountId'], 'Integer');
      }
      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Integer');
      }
      if (data.hasOwnProperty('clientId')) {
        obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Integer');
      }
      if (data.hasOwnProperty('customFields')) {
        obj['customFields'] = ApiClient.convertToType(data['customFields'], Object);
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
    }
    return obj;
  }


  /**
   * Id of the client account
   * @member {Integer} accountId
   */
  exports.prototype['accountId'] = undefined;

  /**
   * 1 or 0 based on whether this notification is active or not
   * @member {Integer} active
   */
  exports.prototype['active'] = undefined;

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
   * Date of the notification
   * @member {String} date
   */
  exports.prototype['date'] = undefined;

  /**
   * Notification id
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Notification message
   * @member {String} message
   */
  exports.prototype['message'] = undefined;




  return exports;
}));
