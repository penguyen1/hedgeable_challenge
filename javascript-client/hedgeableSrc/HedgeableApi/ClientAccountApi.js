(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../HedgeableModel/ClientAccount', '../HedgeableModel/BalancesMap', '../HedgeableModel/Holding', '../HedgeableModel/Transaction'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../HedgeableModel/ClientAccount'), require('../HedgeableModel/BalancesMap'), require('../HedgeableModel/Holding'), require('../HedgeableModel/Transaction'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiDocumentation) {
      root.ApiDocumentation = {};
    }
    root.ApiDocumentation.ClientAccountApi = factory(root.ApiDocumentation.ApiClient, root.ApiDocumentation.ClientAccount, root.ApiDocumentation.BalancesMap, root.ApiDocumentation.Holding, root.ApiDocumentation.Transaction);
  }
}(this, function(ApiClient, ClientAccount, BalancesMap, Holding, Transaction) {
  'use strict';

  /**
   * ClientAccount service.
   * @module HedgeableApi/ClientAccountApi
   * @version 1.0
   */

  /**
   * Constructs a new ClientAccountApi. 
   * @alias module:HedgeableApi/ClientAccountApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createUsingPOST operation.
     * @callback module:HedgeableApi/ClientAccountApi~createUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:HedgeableModel/ClientAccount} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create An Account
     * Create an account for a client
     * @param {String} token The API partner&#39;s authorization token
     * @param {String} usertoken The client&#39;s session token
     * @param {Integer} clientid Client id
     * @param {String} name Account name
     * @param {Object} opts Optional parameters
     * @param {String} opts.description Account description
     * @param {Integer} opts.type Account type. Please view the account types service to retrieve the id of the account type.
     * @param {Integer} opts.allocationid The allocation id of the client account.
     * @param {String} opts.custom Any custom fields for the account. The custom fields must be a json string of name-value pairs
     * @param {module:HedgeableApi/ClientAccountApi~createUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:HedgeableModel/ClientAccount}
     */
    this.createUsingPOST = function(token, usertoken, clientid, name, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw "Missing the required parameter 'token' when calling createUsingPOST";
      }

      // verify the required parameter 'usertoken' is set
      if (usertoken == undefined || usertoken == null) {
        throw "Missing the required parameter 'usertoken' when calling createUsingPOST";
      }

      // verify the required parameter 'clientid' is set
      if (clientid == undefined || clientid == null) {
        throw "Missing the required parameter 'clientid' when calling createUsingPOST";
      }

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw "Missing the required parameter 'name' when calling createUsingPOST";
      }


      var pathParams = {
        'clientid': clientid
      };
      var queryParams = {
        'token': token,
        'usertoken': usertoken,
        'name': name,
        'description': opts['description'],
        'type': opts['type'],
        'allocationid': opts['allocationid'],
        'custom': opts['custom']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = ClientAccount;

      return this.apiClient.callApi(
        '/client/{clientid}/account', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBalancesUsingGET operation.
     * @callback module:HedgeableApi/ClientAccountApi~getBalancesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:HedgeableModel/BalancesMap} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Account Performance
     * Get the performance stats for a client account
     * @param {String} token The API partner&#39;s authorization token
     * @param {String} usertoken The client&#39;s session token
     * @param {Integer} clientid Client id
     * @param {Integer} accountid Client account id
     * @param {Object} opts Optional parameters
     * @param {String} opts.startdate Start date of the performance stats. Please enter the date in the format YYYY-MM-DD. Leave blank to get the performance stats from inception.
     * @param {String} opts.enddate Last date of the performance stats. Please enter the date in the format YYYY-MM-DD. Leave blank to get the performance till date.
     * @param {module:HedgeableApi/ClientAccountApi~getBalancesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:HedgeableModel/BalancesMap}
     */
    this.getBalancesUsingGET = function(token, usertoken, clientid, accountid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw "Missing the required parameter 'token' when calling getBalancesUsingGET";
      }

      // verify the required parameter 'usertoken' is set
      if (usertoken == undefined || usertoken == null) {
        throw "Missing the required parameter 'usertoken' when calling getBalancesUsingGET";
      }

      // verify the required parameter 'clientid' is set
      if (clientid == undefined || clientid == null) {
        throw "Missing the required parameter 'clientid' when calling getBalancesUsingGET";
      }

      // verify the required parameter 'accountid' is set
      if (accountid == undefined || accountid == null) {
        throw "Missing the required parameter 'accountid' when calling getBalancesUsingGET";
      }


      var pathParams = {
        'clientid': clientid,
        'accountid': accountid
      };
      var queryParams = {
        'token': token,
        'usertoken': usertoken,
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
      var returnType = BalancesMap;

      return this.apiClient.callApi(
        '/client/{clientid}/account/{accountid}/performance', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getHoldingsUsingGET operation.
     * @callback module:HedgeableApi/ClientAccountApi~getHoldingsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:HedgeableModel/Holding>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Account Holdings
     * Get the current holdings for a client account
     * @param {String} token The API partner&#39;s authorization token
     * @param {String} usertoken The client&#39;s session token
     * @param {Integer} clientid Client id
     * @param {Integer} accountid Client account id
     * @param {module:HedgeableApi/ClientAccountApi~getHoldingsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:HedgeableModel/Holding>}
     */
    this.getHoldingsUsingGET = function(token, usertoken, clientid, accountid, callback) {
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw "Missing the required parameter 'token' when calling getHoldingsUsingGET";
      }

      // verify the required parameter 'usertoken' is set
      if (usertoken == undefined || usertoken == null) {
        throw "Missing the required parameter 'usertoken' when calling getHoldingsUsingGET";
      }

      // verify the required parameter 'clientid' is set
      if (clientid == undefined || clientid == null) {
        throw "Missing the required parameter 'clientid' when calling getHoldingsUsingGET";
      }

      // verify the required parameter 'accountid' is set
      if (accountid == undefined || accountid == null) {
        throw "Missing the required parameter 'accountid' when calling getHoldingsUsingGET";
      }


      var pathParams = {
        'clientid': clientid,
        'accountid': accountid
      };
      var queryParams = {
        'token': token,
        'usertoken': usertoken
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = [Holding];

      return this.apiClient.callApi(
        '/client/{clientid}/account/{accountid}/holdings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTransactionsUsingGET operation.
     * @callback module:HedgeableApi/ClientAccountApi~getTransactionsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:HedgeableModel/Transaction>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Account Transactions
     * Get the transactions for a client account
     * @param {String} token The API partner&#39;s authorization token
     * @param {String} usertoken The client&#39;s session token
     * @param {Integer} clientid Client id
     * @param {Integer} accountid Client account id
     * @param {Object} opts Optional parameters
     * @param {String} opts.startdate Start date of the transactions. Please enter the date in the format YYYY-MM-DD. Leave blank to get the transactions from inception.
     * @param {String} opts.enddate Last date of the transactions. Please enter the date in the format YYYY-MM-DD. Leave blank to get the transactions till date.
     * @param {module:HedgeableApi/ClientAccountApi~getTransactionsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:HedgeableModel/Transaction>}
     */
    this.getTransactionsUsingGET = function(token, usertoken, clientid, accountid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw "Missing the required parameter 'token' when calling getTransactionsUsingGET";
      }

      // verify the required parameter 'usertoken' is set
      if (usertoken == undefined || usertoken == null) {
        throw "Missing the required parameter 'usertoken' when calling getTransactionsUsingGET";
      }

      // verify the required parameter 'clientid' is set
      if (clientid == undefined || clientid == null) {
        throw "Missing the required parameter 'clientid' when calling getTransactionsUsingGET";
      }

      // verify the required parameter 'accountid' is set
      if (accountid == undefined || accountid == null) {
        throw "Missing the required parameter 'accountid' when calling getTransactionsUsingGET";
      }


      var pathParams = {
        'clientid': clientid,
        'accountid': accountid
      };
      var queryParams = {
        'token': token,
        'usertoken': usertoken,
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
      var returnType = [Transaction];

      return this.apiClient.callApi(
        '/client/{clientid}/account/{accountid}/transactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUsingGET operation.
     * @callback module:HedgeableApi/ClientAccountApi~getUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:HedgeableModel/ClientAccount} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get An Account
     * Get an account for a client
     * @param {String} token The API partner&#39;s authorization token
     * @param {String} usertoken The client&#39;s session token
     * @param {Integer} clientid Client id
     * @param {Integer} accountid Client account id
     * @param {module:HedgeableApi/ClientAccountApi~getUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:HedgeableModel/ClientAccount}
     */
    this.getUsingGET = function(token, usertoken, clientid, accountid, callback) {
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw "Missing the required parameter 'token' when calling getUsingGET";
      }

      // verify the required parameter 'usertoken' is set
      if (usertoken == undefined || usertoken == null) {
        throw "Missing the required parameter 'usertoken' when calling getUsingGET";
      }

      // verify the required parameter 'clientid' is set
      if (clientid == undefined || clientid == null) {
        throw "Missing the required parameter 'clientid' when calling getUsingGET";
      }

      // verify the required parameter 'accountid' is set
      if (accountid == undefined || accountid == null) {
        throw "Missing the required parameter 'accountid' when calling getUsingGET";
      }


      var pathParams = {
        'clientid': clientid,
        'accountid': accountid
      };
      var queryParams = {
        'token': token,
        'usertoken': usertoken
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = ClientAccount;

      return this.apiClient.callApi(
        '/client/{clientid}/account/{accountid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the searchUsingGET operation.
     * @callback module:HedgeableApi/ClientAccountApi~searchUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:HedgeableModel/ClientAccount>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search An Account
     * Search an account for a client
     * @param {String} token The API partner&#39;s authorization token
     * @param {String} usertoken The client&#39;s session token
     * @param {Integer} clientid Client Id
     * @param {Object} opts Optional parameters
     * @param {String} opts.search The search string. Leave blank to retrieve all accounts.
     * @param {module:HedgeableApi/ClientAccountApi~searchUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:HedgeableModel/ClientAccount>}
     */
    this.searchUsingGET = function(token, usertoken, clientid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw "Missing the required parameter 'token' when calling searchUsingGET";
      }

      // verify the required parameter 'usertoken' is set
      if (usertoken == undefined || usertoken == null) {
        throw "Missing the required parameter 'usertoken' when calling searchUsingGET";
      }

      // verify the required parameter 'clientid' is set
      if (clientid == undefined || clientid == null) {
        throw "Missing the required parameter 'clientid' when calling searchUsingGET";
      }


      var pathParams = {
        'clientid': clientid
      };
      var queryParams = {
        'token': token,
        'usertoken': usertoken,
        'search': opts['search']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = [ClientAccount];

      return this.apiClient.callApi(
        '/client/{clientid}/account', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUsingPUT operation.
     * @callback module:HedgeableApi/ClientAccountApi~updateUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {'Integer'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update An Account
     * Update an account for a client
     * @param {String} token The API partner&#39;s authorization token
     * @param {String} usertoken The client&#39;s session token
     * @param {Integer} clientid Client id
     * @param {Integer} accountid Client account id
     * @param {String} name Account name
     * @param {Object} opts Optional parameters
     * @param {String} opts.description Account description
     * @param {Integer} opts.type Account type. Please view the account types service to retrieve the id of the account type.
     * @param {Integer} opts.allocationid The allocation id of the client account.
     * @param {String} opts.custom Any custom fields for the account. The custom fields must be a json string of name-value pairs
     * @param {module:HedgeableApi/ClientAccountApi~updateUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'Integer'}
     */
    this.updateUsingPUT = function(token, usertoken, clientid, accountid, name, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw "Missing the required parameter 'token' when calling updateUsingPUT";
      }

      // verify the required parameter 'usertoken' is set
      if (usertoken == undefined || usertoken == null) {
        throw "Missing the required parameter 'usertoken' when calling updateUsingPUT";
      }

      // verify the required parameter 'clientid' is set
      if (clientid == undefined || clientid == null) {
        throw "Missing the required parameter 'clientid' when calling updateUsingPUT";
      }

      // verify the required parameter 'accountid' is set
      if (accountid == undefined || accountid == null) {
        throw "Missing the required parameter 'accountid' when calling updateUsingPUT";
      }

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw "Missing the required parameter 'name' when calling updateUsingPUT";
      }


      var pathParams = {
        'clientid': clientid,
        'accountid': accountid
      };
      var queryParams = {
        'token': token,
        'usertoken': usertoken,
        'name': name,
        'description': opts['description'],
        'type': opts['type'],
        'allocationid': opts['allocationid'],
        'custom': opts['custom']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = 'Integer';

      return this.apiClient.callApi(
        '/client/{clientid}/account/{accountid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
