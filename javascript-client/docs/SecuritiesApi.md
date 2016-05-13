# ApiDocumentation.SecuritiesApi

All URIs are relative to *https://api.hedgeable.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPricesUsingGET1**](SecuritiesApi.md#getPricesUsingGET1) | **GET** /security/{id}/prices | Get prices
[**searchUsingGET4**](SecuritiesApi.md#searchUsingGET4) | **GET** /security | Search a security


<a name="getPricesUsingGET1"></a>
# **getPricesUsingGET1**
> [DateValue] getPricesUsingGET1(token, id, opts)

Get prices

Get prices for a security between the dates specified. Specify the dates in the format YYYY-MM-DD

### Example
```javascript
var ApiDocumentation = require('api-documentation');

var apiInstance = new ApiDocumentation.SecuritiesApi()

var token = "token_example"; // {String} The API partner's authorization token

var id = 789; // {Integer} Id of the security

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
api.getPricesUsingGET1(token, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| The API partner&#39;s authorization token | 
 **id** | **Integer**| Id of the security | 
 **startdate** | **String**| Start date of the data to retrieve in the format YYYY-MM-DD. Leave blank to retrieve from the beginning. | [optional] 
 **enddate** | **String**| Last date of the data to retrieve in the format YYYY-MM-DD. Leave blank to retrieve till today. | [optional] 

### Return type

[**[DateValue]**](DateValue.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="searchUsingGET4"></a>
# **searchUsingGET4**
> [Security] searchUsingGET4(token, opts)

Search a security

Search a security by ticker or name

### Example
```javascript
var ApiDocumentation = require('api-documentation');

var apiInstance = new ApiDocumentation.SecuritiesApi()

var token = "token_example"; // {String} The API partner's authorization token

var opts = { 
  'search': "search_example" // {String} The search string. Leave blank to get all securities
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.searchUsingGET4(token, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| The API partner&#39;s authorization token | 
 **search** | **String**| The search string. Leave blank to get all securities | [optional] 

### Return type

[**[Security]**](Security.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: */*

