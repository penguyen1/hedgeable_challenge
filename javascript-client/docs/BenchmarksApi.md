# ApiDocumentation.BenchmarksApi

All URIs are relative to *https://api.hedgeable.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPricesUsingGET**](BenchmarksApi.md#getPricesUsingGET) | **GET** /benchmark/{id}/values | Get values for the benchmark
[**searchUsingGET2**](BenchmarksApi.md#searchUsingGET2) | **GET** /benchmark | Search a benchmark


<a name="getPricesUsingGET"></a>
# **getPricesUsingGET**
> [DateValue] getPricesUsingGET(token, id, opts)

Get values for the benchmark

Get values for a benchmark between the dates specified. Specify the dates in the format YYYY-MM-DD

### Example
```javascript
var ApiDocumentation = require('api-documentation');

var apiInstance = new ApiDocumentation.BenchmarksApi()

var token = "token_example"; // {String} The API partner's authorization token

var id = 789; // {Integer} Id of the benchmark

var opts = { 
  'startdate': "startdate_example", // {String} Start date of the data to retrieve in the format YYYY-MM-DD. Leave blank to retrieve from the beginning.
  'enddate': "enddate_example" // {String} Last date of the data to retrieve in the format YYYY-MM-DD. Leave blank to retrieve till today.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getPricesUsingGET(token, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| The API partner&#39;s authorization token | 
 **id** | **Integer**| Id of the benchmark | 
 **startdate** | **String**| Start date of the data to retrieve in the format YYYY-MM-DD. Leave blank to retrieve from the beginning. | [optional] 
 **enddate** | **String**| Last date of the data to retrieve in the format YYYY-MM-DD. Leave blank to retrieve till today. | [optional] 

### Return type

[**[DateValue]**](DateValue.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="searchUsingGET2"></a>
# **searchUsingGET2**
> [Benchmark] searchUsingGET2(token, opts)

Search a benchmark

Search a benchmark by ticker or name. Leave the search field blank to retrieve all benchmarks.

### Example
```javascript
var ApiDocumentation = require('api-documentation');

var apiInstance = new ApiDocumentation.BenchmarksApi()

var token = "token_example"; // {String} The API partner's authorization token

var opts = { 
  'search': "search_example" // {String} The search string. Leave blank to get all benchmarks
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.searchUsingGET2(token, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| The API partner&#39;s authorization token | 
 **search** | **String**| The search string. Leave blank to get all benchmarks | [optional] 

### Return type

[**[Benchmark]**](Benchmark.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: */*

