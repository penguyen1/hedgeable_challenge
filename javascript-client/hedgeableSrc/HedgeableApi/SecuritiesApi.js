(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../HedgeableModel/DateValue', '../HedgeableModel/Security'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../HedgeableModel/DateValue'), require('../HedgeableModel/Security'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiDocumentation) {
      root.ApiDocumentation = {};
    }
    root.ApiDocumentation.SecuritiesApi = factory(root.ApiDocumentation.ApiClient, root.ApiDocumentation.DateValue, root.ApiDocumentation.Security);
  }
}(this, function(ApiClient, DateValue, Security) {
  'use strict';

  /**
   * Securities service.
   * @module HedgeableApi/SecuritiesApi
   * @version 1.0
   */

  /**
   * Constructs a new SecuritiesApi. 
   * @alias module:HedgeableApi/SecuritiesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getPricesUsingGET1 operation.
     * @callback module:HedgeableApi/SecuritiesApi~getPricesUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:HedgeableModel/DateValue>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get prices
     * Get prices for a security between the dates specified. Specify the dates in the format YYYY-MM-DD
     * @param {String} token The API partner&#39;s authorization token
     * @param {Integer} id Id of the security
     * @param {Object} opts Optional parameters
     * @param {String} opts.startdate Start date of the data to retrieve in the format YYYY-MM-DD. Leave blank to retrieve from the beginning.
     * @param {String} opts.enddate Last date of the data to retrieve in the format YYYY-MM-DD. Leave blank to retrieve till today.
     * @param {module:HedgeableApi/SecuritiesApi~getPricesUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:HedgeableModel/DateValue>}
     */
    this.getPricesUsingGET1 = function(token, id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw "Missing the required parameter 'token' when calling getPricesUsingGET1";
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling getPricesUsingGET1";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'token': token,
        'startdate': opts['startdate'],
        'enddate': opts['enddate']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = [DateValue];

      return this.apiClient.callApi(
        '/security/{id}/prices', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the searchUsingGET4 operation.
     * @callback module:HedgeableApi/SecuritiesApi~searchUsingGET4Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:HedgeableModel/Security>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search a security
     * Search a security by ticker or name
     * @param {String} token The API partner&#39;s authorization token
     * @param {Object} opts Optional parameters
     * @param {String} opts.search The search string. Leave blank to get all securities
     * @param {module:HedgeableApi/SecuritiesApi~searchUsingGET4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:HedgeableModel/Security>}
     */
    this.searchUsingGET4 = function(token, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw "Missing the required parameter 'token' when calling searchUsingGET4";
      }


      var pathParams = {
      };
      var queryParams = {
        'token': token,
        'search': opts['search']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = [Security];

      return this.apiClient.callApi(
        '/security', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
