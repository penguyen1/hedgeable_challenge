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
    root.ApiDocumentation.AlertSetting = factory(root.ApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AlertSetting model module.
   * @module HedgeableModel/AlertSetting
   * @version 1.0
   */

  /**
   * Constructs a new <code>AlertSetting</code>.
   * Alert Setting Object
   * @alias module:HedgeableModel/AlertSetting
   * @class
   * @param id
   */
  var exports = function(id) {



    this['id'] = id;

  };

  /**
   * Constructs a <code>AlertSetting</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:HedgeableModel/AlertSetting} obj Optional instance to populate.
   * @return {module:HedgeableModel/AlertSetting} The populated <code>AlertSetting</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('clientId')) {
        obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Integer');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('receive')) {
        obj['receive'] = ApiClient.convertToType(data['receive'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * Id of the client
   * @member {Integer} clientId
   */
  exports.prototype['clientId'] = undefined;

  /**
   * Description of the setting
   * @member {String} description
   */
  exports.prototype['description'] = undefined;

  /**
   * Alert setting id
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * 1 or 0 based on whether the setting is on or off respectively
   * @member {Integer} receive
   */
  exports.prototype['receive'] = undefined;




  return exports;
}));
