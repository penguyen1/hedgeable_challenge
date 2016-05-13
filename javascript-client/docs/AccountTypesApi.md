# ApiDocumentation.AccountTypesApi

All URIs are relative to *https://api.hedgeable.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchUsingGET1**](AccountTypesApi.md#searchUsingGET1) | **GET** /accounttypes | Get Account Types


<a name="searchUsingGET1"></a>
# **searchUsingGET1**
> [AccountType] searchUsingGET1(token)

Get Account Types

Get all account types

### Example
```javascript
var ApiDocumentation = require('api-documentation');

var apiInstance = new ApiDocumentation.AccountTypesApi()

var token = "token_example"; // {String} The API partner's authorization token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.searchUsingGET1(token, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| The API partner&#39;s authorization token | 

### Return type

[**[AccountType]**](AccountType.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: */*

