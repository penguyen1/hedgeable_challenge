(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../HedgeableModel/DateValue', '../HedgeableModel/Benchmark'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../HedgeableModel/DateValue'), require('../HedgeableModel/Benchmark'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiDocumentation) {
      root.ApiDocumentation = {};
    }
    root.ApiDocumentation.BenchmarksApi = factory(root.ApiDocumentation.ApiClient, root.ApiDocumentation.DateValue, root.ApiDocumentation.Benchmark);
  }
}(this, function(ApiClient, DateValue, Benchmark) {
  'use strict';

  /**
   * Benchmarks service.
   * @module HedgeableApi/BenchmarksApi
   * @version 1.0
   */

  /**
   * Constructs a new BenchmarksApi. 
   * @alias module:HedgeableApi/BenchmarksApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getPricesUsingGET operation.
     * @callback module:HedgeableApi/BenchmarksApi~getPricesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:HedgeableModel/DateValue>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get values for the benchmark
     * Get values for a benchmark between the dates specified. Specify the dates in the format YYYY-MM-DD
     * @param {String} token The API partner&#39;s authorization token
     * @param {Integer} id Id of the benchmark
     * @param {Object} opts Optional parameters
     * @param {String} opts.startdate Start date of the data to retrieve in the format YYYY-MM-DD. Leave blank to retrieve from the beginning.
     * @param {String} opts.enddate Last date of the data to retrieve in the format YYYY-MM-DD. Leave blank to retrieve till today.
     * @param {module:HedgeableApi/BenchmarksApi~getPricesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:HedgeableModel/DateValue>}
     */
    this.getPricesUsingGET = function(token, id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw "Missing the required parameter 'token' when calling getPricesUsingGET";
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling getPricesUsingGET";
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
        '/benchmark/{id}/values', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the searchUsingGET2 operation.
     * @callback module:HedgeableApi/BenchmarksApi~searchUsingGET2Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:HedgeableModel/Benchmark>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search a benchmark
     * Search a benchmark by ticker or name. Leave the search field blank to retrieve all benchmarks.
     * @param {String} token The API partner&#39;s authorization token
     * @param {Object} opts Optional parameters
     * @param {String} opts.search The search string. Leave blank to get all benchmarks
     * @param {module:HedgeableApi/BenchmarksApi~searchUsingGET2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:HedgeableModel/Benchmark>}
     */
    this.searchUsingGET2 = function(token, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw "Missing the required parameter 'token' when calling searchUsingGET2";
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
      var returnType = [Benchmark];

      return this.apiClient.callApi(
        '/benchmark', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
