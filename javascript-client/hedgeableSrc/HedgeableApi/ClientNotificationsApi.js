(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../HedgeableModel/AlertSetting', '../HedgeableModel/Notification'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../HedgeableModel/AlertSetting'), require('../HedgeableModel/Notification'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiDocumentation) {
      root.ApiDocumentation = {};
    }
    root.ApiDocumentation.ClientNotificationsApi = factory(root.ApiDocumentation.ApiClient, root.ApiDocumentation.AlertSetting, root.ApiDocumentation.Notification);
  }
}(this, function(ApiClient, AlertSetting, Notification) {
  'use strict';

  /**
   * ClientNotifications service.
   * @module HedgeableApi/ClientNotificationsApi
   * @version 1.0
   */

  /**
   * Constructs a new ClientNotificationsApi. 
   * @alias module:HedgeableApi/ClientNotificationsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the editAlertSettingsUsingPUT operation.
     * @callback module:HedgeableApi/ClientNotificationsApi~editAlertSettingsUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {'Integer'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Alert Settings
     * Update multiple alert settings for a client
     * @param {Integer} clientid clientid
     * @param {String} token The API partner&#39;s authorization token
     * @param {String} usertoken The client&#39;s session token
     * @param {String} settings A JSON object containing a list of alert settings in the format [{\&quot;id\&quot;:33,\&quot;receive\&quot;:1},{\&quot;id\&quot;:31,\&quot;receive\&quot;:0}]
     * @param {module:HedgeableApi/ClientNotificationsApi~editAlertSettingsUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'Integer'}
     */
    this.editAlertSettingsUsingPUT = function(clientid, token, usertoken, settings, callback) {
      var postBody = null;

      // verify the required parameter 'clientid' is set
      if (clientid == undefined || clientid == null) {
        throw "Missing the required parameter 'clientid' when calling editAlertSettingsUsingPUT";
      }

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw "Missing the required parameter 'token' when calling editAlertSettingsUsingPUT";
      }

      // verify the required parameter 'usertoken' is set
      if (usertoken == undefined || usertoken == null) {
        throw "Missing the required parameter 'usertoken' when calling editAlertSettingsUsingPUT";
      }

      // verify the required parameter 'settings' is set
      if (settings == undefined || settings == null) {
        throw "Missing the required parameter 'settings' when calling editAlertSettingsUsingPUT";
      }


      var pathParams = {
        'clientid': clientid
      };
      var queryParams = {
        'token': token,
        'usertoken': usertoken,
        'settings': settings
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
        '/client/{clientid}/alertsettings', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the editEmailSettingsUsingPUT operation.
     * @callback module:HedgeableApi/ClientNotificationsApi~editEmailSettingsUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {'Integer'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update An Alert Setting
     * Update a particular alert setting for a client
     * @param {String} token The API partner&#39;s authorization token
     * @param {String} usertoken The client&#39;s session token
     * @param {Integer} clientid Client Id
     * @param {Integer} alertsettingsid Alert Settings Id
     * @param {Integer} receive 1 or 0 based on whether the setting should be on or off respectively
     * @param {module:HedgeableApi/ClientNotificationsApi~editEmailSettingsUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'Integer'}
     */
    this.editEmailSettingsUsingPUT = function(token, usertoken, clientid, alertsettingsid, receive, callback) {
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw "Missing the required parameter 'token' when calling editEmailSettingsUsingPUT";
      }

      // verify the required parameter 'usertoken' is set
      if (usertoken == undefined || usertoken == null) {
        throw "Missing the required parameter 'usertoken' when calling editEmailSettingsUsingPUT";
      }

      // verify the required parameter 'clientid' is set
      if (clientid == undefined || clientid == null) {
        throw "Missing the required parameter 'clientid' when calling editEmailSettingsUsingPUT";
      }

      // verify the required parameter 'alertsettingsid' is set
      if (alertsettingsid == undefined || alertsettingsid == null) {
        throw "Missing the required parameter 'alertsettingsid' when calling editEmailSettingsUsingPUT";
      }

      // verify the required parameter 'receive' is set
      if (receive == undefined || receive == null) {
        throw "Missing the required parameter 'receive' when calling editEmailSettingsUsingPUT";
      }


      var pathParams = {
        'clientid': clientid,
        'alertsettingsid': alertsettingsid
      };
      var queryParams = {
        'token': token,
        'usertoken': usertoken,
        'receive': receive
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
        '/client/{clientid}/alertsettings/{alertsettingsid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAlertSettingsUsingGET operation.
     * @callback module:HedgeableApi/ClientNotificationsApi~getAlertSettingsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:HedgeableModel/AlertSetting} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get An Alert Setting
     * Get a particular alert setting for a client
     * @param {String} token The API partner&#39;s authorization token
     * @param {String} usertoken The client&#39;s session token
     * @param {Integer} clientid Client Id
     * @param {Integer} alertsettingsid Alert Settings Id
     * @param {module:HedgeableApi/ClientNotificationsApi~getAlertSettingsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:HedgeableModel/AlertSetting}
     */
    this.getAlertSettingsUsingGET = function(token, usertoken, clientid, alertsettingsid, callback) {
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw "Missing the required parameter 'token' when calling getAlertSettingsUsingGET";
      }

      // verify the required parameter 'usertoken' is set
      if (usertoken == undefined || usertoken == null) {
        throw "Missing the required parameter 'usertoken' when calling getAlertSettingsUsingGET";
      }

      // verify the required parameter 'clientid' is set
      if (clientid == undefined || clientid == null) {
        throw "Missing the required parameter 'clientid' when calling getAlertSettingsUsingGET";
      }

      // verify the required parameter 'alertsettingsid' is set
      if (alertsettingsid == undefined || alertsettingsid == null) {
        throw "Missing the required parameter 'alertsettingsid' when calling getAlertSettingsUsingGET";
      }


      var pathParams = {
        'clientid': clientid,
        'alertsettingsid': alertsettingsid
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
      var returnType = AlertSetting;

      return this.apiClient.callApi(
        '/client/{clientid}/alertsettings/{alertsettingsid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllAlertSettingsUsingGET operation.
     * @callback module:HedgeableApi/ClientNotificationsApi~getAllAlertSettingsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:HedgeableModel/AlertSetting>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Alert Settings
     * Get email and notification alert settings for a client
     * @param {String} token The API partner&#39;s authorization token
     * @param {String} usertoken The client&#39;s session token
     * @param {Integer} clientid Client Id
     * @param {module:HedgeableApi/ClientNotificationsApi~getAllAlertSettingsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:HedgeableModel/AlertSetting>}
     */
    this.getAllAlertSettingsUsingGET = function(token, usertoken, clientid, callback) {
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw "Missing the required parameter 'token' when calling getAllAlertSettingsUsingGET";
      }

      // verify the required parameter 'usertoken' is set
      if (usertoken == undefined || usertoken == null) {
        throw "Missing the required parameter 'usertoken' when calling getAllAlertSettingsUsingGET";
      }

      // verify the required parameter 'clientid' is set
      if (clientid == undefined || clientid == null) {
        throw "Missing the required parameter 'clientid' when calling getAllAlertSettingsUsingGET";
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
      var returnType = [AlertSetting];

      return this.apiClient.callApi(
        '/client/{clientid}/alertsettings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllNotificationsUsingGET operation.
     * @callback module:HedgeableApi/ClientNotificationsApi~getAllNotificationsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:HedgeableModel/Notification>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Client All Notifications
     * Get all notifications for a client
     * @param {String} token The API partner&#39;s authorization token
     * @param {String} usertoken The client&#39;s session token
     * @param {Integer} clientid Client Id
     * @param {module:HedgeableApi/ClientNotificationsApi~getAllNotificationsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:HedgeableModel/Notification>}
     */
    this.getAllNotificationsUsingGET = function(token, usertoken, clientid, callback) {
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw "Missing the required parameter 'token' when calling getAllNotificationsUsingGET";
      }

      // verify the required parameter 'usertoken' is set
      if (usertoken == undefined || usertoken == null) {
        throw "Missing the required parameter 'usertoken' when calling getAllNotificationsUsingGET";
      }

      // verify the required parameter 'clientid' is set
      if (clientid == undefined || clientid == null) {
        throw "Missing the required parameter 'clientid' when calling getAllNotificationsUsingGET";
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
      var returnType = [Notification];

      return this.apiClient.callApi(
        '/client/{clientid}/allnotifications', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNotificationsUsingGET operation.
     * @callback module:HedgeableApi/ClientNotificationsApi~getNotificationsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:HedgeableModel/Notification>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Client Active Notifications
     * Get active notifications for a client
     * @param {String} token The API partner&#39;s authorization token
     * @param {String} usertoken The client&#39;s session token
     * @param {Integer} clientid Client Id
     * @param {module:HedgeableApi/ClientNotificationsApi~getNotificationsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:HedgeableModel/Notification>}
     */
    this.getNotificationsUsingGET = function(token, usertoken, clientid, callback) {
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw "Missing the required parameter 'token' when calling getNotificationsUsingGET";
      }

      // verify the required parameter 'usertoken' is set
      if (usertoken == undefined || usertoken == null) {
        throw "Missing the required parameter 'usertoken' when calling getNotificationsUsingGET";
      }

      // verify the required parameter 'clientid' is set
      if (clientid == undefined || clientid == null) {
        throw "Missing the required parameter 'clientid' when calling getNotificationsUsingGET";
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
      var returnType = [Notification];

      return this.apiClient.callApi(
        '/client/{clientid}/activenotifications', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setPushTokenUsingPOST operation.
     * @callback module:HedgeableApi/ClientNotificationsApi~setPushTokenUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set the push notification token
     * Set the push notification token for the client device
     * @param {String} token The API partner&#39;s authorization token
     * @param {String} usertoken The client&#39;s session token
     * @param {Integer} clientid Client Id
     * @param {String} pushtoken The client device&#39;s token to be used for push notifications
     * @param {Object} opts Optional parameters
     * @param {String} opts.deviceid The client device&#39;s unique id
     * @param {module:HedgeableApi/ClientNotificationsApi~setPushTokenUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.setPushTokenUsingPOST = function(token, usertoken, clientid, pushtoken, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw "Missing the required parameter 'token' when calling setPushTokenUsingPOST";
      }

      // verify the required parameter 'usertoken' is set
      if (usertoken == undefined || usertoken == null) {
        throw "Missing the required parameter 'usertoken' when calling setPushTokenUsingPOST";
      }

      // verify the required parameter 'clientid' is set
      if (clientid == undefined || clientid == null) {
        throw "Missing the required parameter 'clientid' when calling setPushTokenUsingPOST";
      }

      // verify the required parameter 'pushtoken' is set
      if (pushtoken == undefined || pushtoken == null) {
        throw "Missing the required parameter 'pushtoken' when calling setPushTokenUsingPOST";
      }


      var pathParams = {
        'clientid': clientid
      };
      var queryParams = {
        'token': token,
        'usertoken': usertoken,
        'pushtoken': pushtoken,
        'deviceid': opts['deviceid']
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
        '/client/{clientid}/pushtoken', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
