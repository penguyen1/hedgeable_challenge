(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../HedgeableModel/AccountType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../HedgeableModel/AccountType'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiDocumentation) {
      root.ApiDocumentation = {};
    }
    root.ApiDocumentation.AccountTypesApi = factory(root.ApiDocumentation.ApiClient, root.ApiDocumentation.AccountType);
  }
}(this, function(ApiClient, AccountType) {
  'use strict';

  /**
   * AccountTypes service.
   * @module HedgeableApi/AccountTypesApi
   * @version 1.0
   */

  /**
   * Constructs a new AccountTypesApi. 
   * @alias module:HedgeableApi/AccountTypesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the searchUsingGET1 operation.
     * @callback module:HedgeableApi/AccountTypesApi~searchUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:HedgeableModel/AccountType>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Account Types
     * Get all account types
     * @param {String} token The API partner&#39;s authorization token
     * @param {module:HedgeableApi/AccountTypesApi~searchUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:HedgeableModel/AccountType>}
     */
    this.searchUsingGET1 = function(token, callback) {
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw "Missing the required parameter 'token' when calling searchUsingGET1";
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
      var returnType = [AccountType];

      return this.apiClient.callApi(
        '/accounttypes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
