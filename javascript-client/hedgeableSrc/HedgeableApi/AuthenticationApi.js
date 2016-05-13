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
    root.ApiDocumentation.AuthenticationApi = factory(root.ApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Authentication service.
   * @module HedgeableApi/AuthenticationApi
   * @version 1.0
   */

  /**
   * Constructs a new AuthenticationApi. 
   * @alias module:HedgeableApi/AuthenticationApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the validateCredentialsUsingPOST operation.
     * @callback module:HedgeableApi/AuthenticationApi~validateCredentialsUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Authenticate app
     * Authenticate the app by providing the username and key. A token is returned that should be used in all subsequent calls to the API
     * @param {String} username The API partner&#39;s api username
     * @param {String} key The API partner&#39;s api key
     * @param {module:HedgeableApi/AuthenticationApi~validateCredentialsUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.validateCredentialsUsingPOST = function(username, key, callback) {
      var postBody = null;

      // verify the required parameter 'username' is set
      if (username == undefined || username == null) {
        throw "Missing the required parameter 'username' when calling validateCredentialsUsingPOST";
      }

      // verify the required parameter 'key' is set
      if (key == undefined || key == null) {
        throw "Missing the required parameter 'key' when calling validateCredentialsUsingPOST";
      }


      var pathParams = {
      };
      var queryParams = {
        'username': username,
        'key': key
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/authenticate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
