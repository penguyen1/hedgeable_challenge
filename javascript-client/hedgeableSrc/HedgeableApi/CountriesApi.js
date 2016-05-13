(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../HedgeableModel/Country'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../HedgeableModel/Country'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiDocumentation) {
      root.ApiDocumentation = {};
    }
    root.ApiDocumentation.CountriesApi = factory(root.ApiDocumentation.ApiClient, root.ApiDocumentation.Country);
  }
}(this, function(ApiClient, Country) {
  'use strict';

  /**
   * Countries service.
   * @module HedgeableApi/CountriesApi
   * @version 1.0
   */

  /**
   * Constructs a new CountriesApi. 
   * @alias module:HedgeableApi/CountriesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the searchUsingGET3 operation.
     * @callback module:HedgeableApi/CountriesApi~searchUsingGET3Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:HedgeableModel/Country>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Countries
     * Get a list of countries including 2 and 3 letter codes
     * @param {String} token The API partner&#39;s authorization token
     * @param {module:HedgeableApi/CountriesApi~searchUsingGET3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:HedgeableModel/Country>}
     */
    this.searchUsingGET3 = function(token, callback) {
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw "Missing the required parameter 'token' when calling searchUsingGET3";
      }


      var pathParams = {
      };
      var queryParams = {
        'token': token
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = [Country];

      return this.apiClient.callApi(
        '/country', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
