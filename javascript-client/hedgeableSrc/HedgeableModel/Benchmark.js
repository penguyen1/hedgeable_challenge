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
    root.ApiDocumentation.Benchmark = factory(root.ApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Benchmark model module.
   * @module HedgeableModel/Benchmark
   * @version 1.0
   */

  /**
   * Constructs a new <code>Benchmark</code>.
   * Benchmark Object
   * @alias module:HedgeableModel/Benchmark
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>Benchmark</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:HedgeableModel/Benchmark} obj Optional instance to populate.
   * @return {module:HedgeableModel/Benchmark} The populated <code>Benchmark</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
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
   * Category of the Benchmark
   * @member {String} category
   */
  exports.prototype['category'] = undefined;

  /**
   * Country of the Benchmark. XX if the country is not applicable
   * @member {String} country
   */
  exports.prototype['country'] = undefined;

  /**
   * Id of the Benchmark
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Name of the Benchmark
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * Ticker of the Benchmark
   * @member {String} ticker
   */
  exports.prototype['ticker'] = undefined;




  return exports;
}));
