# ApiDocumentation.CountriesApi

All URIs are relative to *https://api.hedgeable.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchUsingGET3**](CountriesApi.md#searchUsingGET3) | **GET** /country | Get Countries


<a name="searchUsingGET3"></a>
# **searchUsingGET3**
> [Country] searchUsingGET3(token)

Get Countries

Get a list of countries including 2 and 3 letter codes

### Example
```javascript
var ApiDocumentation = require('api-documentation');

var apiInstance = new ApiDocumentation.CountriesApi()

var token = "token_example"; // {String} The API partner's authorization token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.searchUsingGET3(token, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| The API partner&#39;s authorization token | 

### Return type

[**[Country]**](Country.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: */*

