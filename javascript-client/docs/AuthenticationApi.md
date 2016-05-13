# ApiDocumentation.AuthenticationApi

All URIs are relative to *https://api.hedgeable.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**validateCredentialsUsingPOST**](AuthenticationApi.md#validateCredentialsUsingPOST) | **POST** /authenticate | Authenticate app


<a name="validateCredentialsUsingPOST"></a>
# **validateCredentialsUsingPOST**
> &#39;String&#39; validateCredentialsUsingPOST(username, key)

Authenticate app

Authenticate the app by providing the username and key. A token is returned that should be used in all subsequent calls to the API

### Example
```javascript
var ApiDocumentation = require('api-documentation');

var apiInstance = new ApiDocumentation.AuthenticationApi()

var username = "username_example"; // {String} The API partner's api username

var key = "key_example"; // {String} The API partner's api key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.validateCredentialsUsingPOST(username, key, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The API partner&#39;s api username | 
 **key** | **String**| The API partner&#39;s api key | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: */*

