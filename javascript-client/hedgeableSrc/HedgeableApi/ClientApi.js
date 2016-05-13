(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../HedgeableModel/Client', '../HedgeableModel/ClientAggregateInfo', '../HedgeableModel/BalancesMap', '../HedgeableModel/Holding', '../HedgeableModel/Transaction'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../HedgeableModel/Client'), require('../HedgeableModel/ClientAggregateInfo'), require('../HedgeableModel/BalancesMap'), require('../HedgeableModel/Holding'), require('../HedgeableModel/Transaction'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiDocumentation) {
      root.ApiDocumentation = {};
    }
    root.ApiDocumentation.ClientApi = factory(root.ApiDocumentation.ApiClient, root.ApiDocumentation.Client, root.ApiDocumentation.ClientAggregateInfo, root.ApiDocumentation.BalancesMap, root.ApiDocumentation.Holding, root.ApiDocumentation.Transaction);
  }
}(this, function(ApiClient, Client, ClientAggregateInfo, BalancesMap, Holding, Transaction) {
  'use strict';

  /**
   * Client service.
   * @module HedgeableApi/ClientApi
   * @version 1.0
   */

  /**
   * Constructs a new ClientApi. 
   * @alias module:HedgeableApi/ClientApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createUsingPOST1 operation.
     * @callback module:HedgeableApi/ClientApi~createUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {module:HedgeableModel/Client} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create A Client
     * Create / Sign up a user
     * @param {String} token The API partner&#39;s authorization token
     * @param {String} email The client&#39;s email
     * @param {String} password The client&#39;s password
     * @param {String} firstname The client&#39;s first name
     * @param {String} lastname The client&#39;s last name
     * @param {Object} opts Optional parameters
     * @param {String} opts.logintype The client&#39;s login type. Used in case of social login. (default to email)
     * @param {String} opts.loginid The client&#39;s login id. Used in case of social login. (default to 0)
     * @param {String} opts.country The client&#39;s country of primary residence (default to US)
     * @param {String} opts.phone The client&#39;s primary phone number
     * @param {String} opts.custom Any custom fields for the client to update. The custom fields must be a json string of name-value pairs
     * @param {module:HedgeableApi/ClientApi~createUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:HedgeableModel/Client}
     */
    this.createUsingPOST1 = function(token, email, password, firstname, lastname, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw "Missing the required parameter 'token' when calling createUsingPOST1";
      }

      // verify the required parameter 'email' is set
      if (email == undefined || email == null) {
        throw "Missing the required parameter 'email' when calling createUsingPOST1";
      }

      // verify the required parameter 'password' is set
      if (password == undefined || password == null) {
        throw "Missing the required parameter 'password' when calling createUsingPOST1";
      }

      // verify the required parameter 'firstname' is set
      if (firstname == undefined || firstname == null) {
        throw "Missing the required parameter 'firstname' when calling createUsingPOST1";
      }

      // verify the required parameter 'lastname' is set
      if (lastname == undefined || lastname == null) {
        throw "Missing the required parameter 'lastname' when calling createUsingPOST1";
      }


      var pathParams = {
      };
      var queryParams = {
        'token': token,
        'email': email,
        'password': password,
        'firstname': firstname,
        'lastname': lastname,
        'logintype': opts['logintype'],
        'loginid': opts['loginid'],
        'country': opts['country'],
        'phone': opts['phone'],
        'custom': opts['custom']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = Client;

      return this.apiClient.callApi(
        '/client', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllInfoUsingGET operation.
     * @callback module:HedgeableApi/ClientApi~getAllInfoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:HedgeableModel/ClientAggregateInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all information
     * Get all information for a client
     * @param {String} token The API partner&#39;s authorization token
     * @param {String} usertoken The client&#39;s session token
     * @param {Integer} clientid Client Id
     * @param {module:HedgeableApi/ClientApi~getAllInfoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:HedgeableModel/ClientAggregateInfo}
     */
    this.getAllInfoUsingGET = function(token, usertoken, clientid, callback) {
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw "Missing the required parameter 'token' when calling getAllInfoUsingGET";
      }

      // verify the required parameter 'usertoken' is set
      if (usertoken == undefined || usertoken == null) {
        throw "Missing the required parameter 'usertoken' when calling getAllInfoUsingGET";
      }

      // verify the required parameter 'clientid' is set
      if (clientid == undefined || clientid == null) {
        throw "Missing the required parameter 'clientid' when calling getAllInfoUsingGET";
      }


      var pathParams = {
        'clientid': clientid
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
      var returnType = ClientAggregateInfo;

      return this.apiClient.callApi(
        '/client/{clientid}/getallinformation', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBalancesUsingGET1 operation.
     * @callback module:HedgeableApi/ClientApi~getBalancesUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:HedgeableModel/BalancesMap} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Client Performance
     * Get all aggregated performance stats for a client
     * @param {String} token The API partner&#39;s authorization token
     * @param {String} usertoken The client&#39;s session token
     * @param {Integer} clientid Client Id
     * @param {Object} opts Optional parameters
     * @param {String} opts.startdate Start date of the performance stats. Please enter the date in the format YYYY-MM-DD. Leave blank to get the performance stats from inception.
     * @param {String} opts.enddate Last date of the performance stats. Please enter the date in the format YYYY-MM-DD. Leave blank to get the performance till date.
     * @param {module:HedgeableApi/ClientApi~getBalancesUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:HedgeableModel/BalancesMap}
     */
    this.getBalancesUsingGET1 = function(token, usertoken, clientid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw "Missing the required parameter 'token' when calling getBalancesUsingGET1";
      }

      // verify the required parameter 'usertoken' is set
      if (usertoken == undefined || usertoken == null) {
        throw "Missing the required parameter 'usertoken' when calling getBalancesUsingGET1";
      }

      // verify the required parameter 'clientid' is set
      if (clientid == undefined || clientid == null) {
        throw "Missing the required parameter 'clientid' when calling getBalancesUsingGET1";
      }


      var pathParams = {
        'clientid': clientid
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
        '/client/{clientid}/performance', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getHoldingsUsingGET1 operation.
     * @callback module:HedgeableApi/ClientApi~getHoldingsUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:HedgeableModel/Holding>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Client Holdings
     * Get the current holdings for a client
     * @param {String} token The API partner&#39;s authorization token
     * @param {String} usertoken The client&#39;s session token
     * @param {Integer} clientid Client Id
     * @param {module:HedgeableApi/ClientApi~getHoldingsUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:HedgeableModel/Holding>}
     */
    this.getHoldingsUsingGET1 = function(token, usertoken, clientid, callback) {
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw "Missing the required parameter 'token' when calling getHoldingsUsingGET1";
      }

      // verify the required parameter 'usertoken' is set
      if (usertoken == undefined || usertoken == null) {
        throw "Missing the required parameter 'usertoken' when calling getHoldingsUsingGET1";
      }

      // verify the required parameter 'clientid' is set
      if (clientid == undefined || clientid == null) {
        throw "Missing the required parameter 'clientid' when calling getHoldingsUsingGET1";
      }


      var pathParams = {
        'clientid': clientid
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
        '/client/{clientid}/holdings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTransactionsUsingGET1 operation.
     * @callback module:HedgeableApi/ClientApi~getTransactionsUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:HedgeableModel/Transaction>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Client Transactions
     * Get all transactions for a client
     * @param {String} token The API partner&#39;s authorization token
     * @param {String} usertoken The client&#39;s session token
     * @param {Integer} clientid Client Id
     * @param {Object} opts Optional parameters
     * @param {String} opts.startdate Start date of the transactions. Please enter the date in the format YYYY-MM-DD. Leave blank to get the transactions from inception.
     * @param {String} opts.enddate Last date of the transactions. Please enter the date in the format YYYY-MM-DD. Leave blank to get the transactions till date.
     * @param {module:HedgeableApi/ClientApi~getTransactionsUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:HedgeableModel/Transaction>}
     */
    this.getTransactionsUsingGET1 = function(token, usertoken, clientid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw "Missing the required parameter 'token' when calling getTransactionsUsingGET1";
      }

      // verify the required parameter 'usertoken' is set
      if (usertoken == undefined || usertoken == null) {
        throw "Missing the required parameter 'usertoken' when calling getTransactionsUsingGET1";
      }

      // verify the required parameter 'clientid' is set
      if (clientid == undefined || clientid == null) {
        throw "Missing the required parameter 'clientid' when calling getTransactionsUsingGET1";
      }


      var pathParams = {
        'clientid': clientid
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
        '/client/{clientid}/transactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUsingGET1 operation.
     * @callback module:HedgeableApi/ClientApi~getUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:HedgeableModel/Client} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get client
     * Get basic information for a client
     * @param {String} token The API partner&#39;s authorization token
     * @param {String} usertoken The client&#39;s session token
     * @param {Integer} clientid Client Id
     * @param {module:HedgeableApi/ClientApi~getUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:HedgeableModel/Client}
     */
    this.getUsingGET1 = function(token, usertoken, clientid, callback) {
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw "Missing the required parameter 'token' when calling getUsingGET1";
      }

      // verify the required parameter 'usertoken' is set
      if (usertoken == undefined || usertoken == null) {
        throw "Missing the required parameter 'usertoken' when calling getUsingGET1";
      }

      // verify the required parameter 'clientid' is set
      if (clientid == undefined || clientid == null) {
        throw "Missing the required parameter 'clientid' when calling getUsingGET1";
      }


      var pathParams = {
        'clientid': clientid
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
      var returnType = Client;

      return this.apiClient.callApi(
        '/client/{clientid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the loginUsingPOST operation.
     * @callback module:HedgeableApi/ClientApi~loginUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:HedgeableModel/Client>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Login a user
     * Login a user by providing the email and password of the user. The client object is returned.
     * @param {String} token The API partner&#39;s authorization token
     * @param {String} email Email of the client
     * @param {String} password Password of the client
     * @param {Object} opts Optional parameters
     * @param {String} opts.logintype The type of login. Only relevant for social sign ups. (default to email)
     * @param {String} opts.username The username for the above login type. Only relevant for social sign ups. (default to 0)
     * @param {String} opts.custom The custom string to pass with additional information about this login. This should be a string with the following format: \&quot;custom\&quot;: &#39;{\&quot;sign_up_platform\&quot;:\&quot;mobile\&quot;,\&quot;device\&quot;:\&quot;iphone6\&quot;}&#39;
     * @param {module:HedgeableApi/ClientApi~loginUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:HedgeableModel/Client>}
     */
    this.loginUsingPOST = function(token, email, password, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw "Missing the required parameter 'token' when calling loginUsingPOST";
      }

      // verify the required parameter 'email' is set
      if (email == undefined || email == null) {
        throw "Missing the required parameter 'email' when calling loginUsingPOST";
      }

      // verify the required parameter 'password' is set
      if (password == undefined || password == null) {
        throw "Missing the required parameter 'password' when calling loginUsingPOST";
      }


      var pathParams = {
      };
      var queryParams = {
        'token': token,
        'email': email,
        'password': password,
        'logintype': opts['logintype'],
        'username': opts['username'],
        'custom': opts['custom']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = [Client];

      return this.apiClient.callApi(
        '/client/login', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the logoutUsingPOST operation.
     * @callback module:HedgeableApi/ClientApi~logoutUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Logout a user
     * Logout a user.
     * @param {String} token The API partner&#39;s authorization token
     * @param {String} usertoken The client&#39;s session token
     * @param {Integer} clientid Client Id
     * @param {module:HedgeableApi/ClientApi~logoutUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.logoutUsingPOST = function(token, usertoken, clientid, callback) {
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw "Missing the required parameter 'token' when calling logoutUsingPOST";
      }

      // verify the required parameter 'usertoken' is set
      if (usertoken == undefined || usertoken == null) {
        throw "Missing the required parameter 'usertoken' when calling logoutUsingPOST";
      }

      // verify the required parameter 'clientid' is set
      if (clientid == undefined || clientid == null) {
        throw "Missing the required parameter 'clientid' when calling logoutUsingPOST";
      }


      var pathParams = {
        'clientid': clientid
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/client/{clientid}/logout', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the refreshTokenUsingPOST operation.
     * @callback module:HedgeableApi/ClientApi~refreshTokenUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:HedgeableModel/Client} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Refresh the user token
     * Refresh and retrieve the user tokens. The client object is returned.
     * @param {String} token The API partner&#39;s authorization token
     * @param {String} usertoken The client&#39;s session token
     * @param {Integer} clientid Client Id
     * @param {module:HedgeableApi/ClientApi~refreshTokenUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:HedgeableModel/Client}
     */
    this.refreshTokenUsingPOST = function(token, usertoken, clientid, callback) {
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw "Missing the required parameter 'token' when calling refreshTokenUsingPOST";
      }

      // verify the required parameter 'usertoken' is set
      if (usertoken == undefined || usertoken == null) {
        throw "Missing the required parameter 'usertoken' when calling refreshTokenUsingPOST";
      }

      // verify the required parameter 'clientid' is set
      if (clientid == undefined || clientid == null) {
        throw "Missing the required parameter 'clientid' when calling refreshTokenUsingPOST";
      }


      var pathParams = {
        'clientid': clientid
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
      var returnType = Client;

      return this.apiClient.callApi(
        '/client/{clientid}/refreshtoken', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the resetPasswordUsingPUT operation.
     * @callback module:HedgeableApi/ClientApi~resetPasswordUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reset passoword
     * Reset the client password and send an email to the client with the new password
     * @param {String} token The API partner&#39;s authorization token
     * @param {String} email The client&#39;s email
     * @param {module:HedgeableApi/ClientApi~resetPasswordUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.resetPasswordUsingPUT = function(token, email, callback) {
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw "Missing the required parameter 'token' when calling resetPasswordUsingPUT";
      }

      // verify the required parameter 'email' is set
      if (email == undefined || email == null) {
        throw "Missing the required parameter 'email' when calling resetPasswordUsingPUT";
      }


      var pathParams = {
      };
      var queryParams = {
        'token': token,
        'email': email
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/client/resetpassword', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUsingPUT1 operation.
     * @callback module:HedgeableApi/ClientApi~updateUsingPUT1Callback
     * @param {String} error Error message, if any.
     * @param {'Integer'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update A Client
     * Create / Sign up a user
     * @param {String} token The API partner&#39;s authorization token
     * @param {String} usertoken The client&#39;s session token
     * @param {Integer} clientid Client Id
     * @param {Object} opts Optional parameters
     * @param {String} opts.email The client&#39;s email to update. Leave blank to not update.
     * @param {String} opts.password The client&#39;s passwordto update. Leave blank to not update.
     * @param {String} opts.logintype The client&#39;s login type to update. Leave blank to not update.
     * @param {String} opts.loginid The client&#39;s login id to update. Leave blank to not update.
     * @param {String} opts.firstname The client&#39;s first name to update. Leave blank to not update.
     * @param {String} opts.lastname The client&#39;s last name to update. Leave blank to not update.
     * @param {String} opts.country The client&#39;s country of primary residence to update. Leave blank to not update.
     * @param {String} opts.phone The client&#39;s primary phone number to update. Leave blank to not update.
     * @param {String} opts.custom Any custom fields for the client to update. The custom fields must be a json string of name-value pairs
     * @param {module:HedgeableApi/ClientApi~updateUsingPUT1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'Integer'}
     */
    this.updateUsingPUT1 = function(token, usertoken, clientid, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw "Missing the required parameter 'token' when calling updateUsingPUT1";
      }

      // verify the required parameter 'usertoken' is set
      if (usertoken == undefined || usertoken == null) {
        throw "Missing the required parameter 'usertoken' when calling updateUsingPUT1";
      }

      // verify the required parameter 'clientid' is set
      if (clientid == undefined || clientid == null) {
        throw "Missing the required parameter 'clientid' when calling updateUsingPUT1";
      }


      var pathParams = {
        'clientid': clientid
      };
      var queryParams = {
        'token': token,
        'usertoken': usertoken,
        'email': opts['email'],
        'password': opts['password'],
        'logintype': opts['logintype'],
        'loginid': opts['loginid'],
        'firstname': opts['firstname'],
        'lastname': opts['lastname'],
        'country': opts['country'],
        'phone': opts['phone'],
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
        '/client/{clientid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
