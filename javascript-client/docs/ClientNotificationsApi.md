# ApiDocumentation.ClientNotificationsApi

All URIs are relative to *https://api.hedgeable.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**editAlertSettingsUsingPUT**](ClientNotificationsApi.md#editAlertSettingsUsingPUT) | **PUT** /client/{clientid}/alertsettings | Update Alert Settings
[**editEmailSettingsUsingPUT**](ClientNotificationsApi.md#editEmailSettingsUsingPUT) | **PUT** /client/{clientid}/alertsettings/{alertsettingsid} | Update An Alert Setting
[**getAlertSettingsUsingGET**](ClientNotificationsApi.md#getAlertSettingsUsingGET) | **GET** /client/{clientid}/alertsettings/{alertsettingsid} | Get An Alert Setting
[**getAllAlertSettingsUsingGET**](ClientNotificationsApi.md#getAllAlertSettingsUsingGET) | **GET** /client/{clientid}/alertsettings | Get Alert Settings
[**getAllNotificationsUsingGET**](ClientNotificationsApi.md#getAllNotificationsUsingGET) | **GET** /client/{clientid}/allnotifications | Get Client All Notifications
[**getNotificationsUsingGET**](ClientNotificationsApi.md#getNotificationsUsingGET) | **GET** /client/{clientid}/activenotifications | Get Client Active Notifications
[**setPushTokenUsingPOST**](ClientNotificationsApi.md#setPushTokenUsingPOST) | **POST** /client/{clientid}/pushtoken | Set the push notification token


<a name="editAlertSettingsUsingPUT"></a>
# **editAlertSettingsUsingPUT**
> &#39;Integer&#39; editAlertSettingsUsingPUT(clientid, token, usertoken, settings)

Update Alert Settings

Update multiple alert settings for a client

### Example
```javascript
var ApiDocumentation = require('api-documentation');

var apiInstance = new ApiDocumentation.ClientNotificationsApi()

var clientid = 789; // {Integer} clientid

var token = "token_example"; // {String} The API partner's authorization token

var usertoken = "usertoken_example"; // {String} The client's session token

var settings = "settings_example"; // {String} A JSON object containing a list of alert settings in the format [{\"id\":33,\"receive\":1},{\"id\":31,\"receive\":0}]


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.editAlertSettingsUsingPUT(clientid, token, usertoken, settings, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientid** | **Integer**| clientid | 
 **token** | **String**| The API partner&#39;s authorization token | 
 **usertoken** | **String**| The client&#39;s session token | 
 **settings** | **String**| A JSON object containing a list of alert settings in the format [{\&quot;id\&quot;:33,\&quot;receive\&quot;:1},{\&quot;id\&quot;:31,\&quot;receive\&quot;:0}] | 

### Return type

**&#39;Integer&#39;**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="editEmailSettingsUsingPUT"></a>
# **editEmailSettingsUsingPUT**
> &#39;Integer&#39; editEmailSettingsUsingPUT(token, usertoken, clientid, alertsettingsid, receive)

Update An Alert Setting

Update a particular alert setting for a client

### Example
```javascript
var ApiDocumentation = require('api-documentation');

var apiInstance = new ApiDocumentation.ClientNotificationsApi()

var token = "token_example"; // {String} The API partner's authorization token

var usertoken = "usertoken_example"; // {String} The client's session token

var clientid = 789; // {Integer} Client Id

var alertsettingsid = 56; // {Integer} Alert Settings Id

var receive = 56; // {Integer} 1 or 0 based on whether the setting should be on or off respectively


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.editEmailSettingsUsingPUT(token, usertoken, clientid, alertsettingsid, receive, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| The API partner&#39;s authorization token | 
 **usertoken** | **String**| The client&#39;s session token | 
 **clientid** | **Integer**| Client Id | 
 **alertsettingsid** | **Integer**| Alert Settings Id | 
 **receive** | **Integer**| 1 or 0 based on whether the setting should be on or off respectively | 

### Return type

**&#39;Integer&#39;**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getAlertSettingsUsingGET"></a>
# **getAlertSettingsUsingGET**
> AlertSetting getAlertSettingsUsingGET(token, usertoken, clientid, alertsettingsid)

Get An Alert Setting

Get a particular alert setting for a client

### Example
```javascript
var ApiDocumentation = require('api-documentation');

var apiInstance = new ApiDocumentation.ClientNotificationsApi()

var token = "token_example"; // {String} The API partner's authorization token

var usertoken = "usertoken_example"; // {String} The client's session token

var clientid = 789; // {Integer} Client Id

var alertsettingsid = 56; // {Integer} Alert Settings Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getAlertSettingsUsingGET(token, usertoken, clientid, alertsettingsid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| The API partner&#39;s authorization token | 
 **usertoken** | **String**| The client&#39;s session token | 
 **clientid** | **Integer**| Client Id | 
 **alertsettingsid** | **Integer**| Alert Settings Id | 

### Return type

[**AlertSetting**](AlertSetting.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getAllAlertSettingsUsingGET"></a>
# **getAllAlertSettingsUsingGET**
> [AlertSetting] getAllAlertSettingsUsingGET(token, usertoken, clientid)

Get Alert Settings

Get email and notification alert settings for a client

### Example
```javascript
var ApiDocumentation = require('api-documentation');

var apiInstance = new ApiDocumentation.ClientNotificationsApi()

var token = "token_example"; // {String} The API partner's authorization token

var usertoken = "usertoken_example"; // {String} The client's session token

var clientid = 789; // {Integer} Client Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getAllAlertSettingsUsingGET(token, usertoken, clientid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| The API partner&#39;s authorization token | 
 **usertoken** | **String**| The client&#39;s session token | 
 **clientid** | **Integer**| Client Id | 

### Return type

[**[AlertSetting]**](AlertSetting.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getAllNotificationsUsingGET"></a>
# **getAllNotificationsUsingGET**
> [Notification] getAllNotificationsUsingGET(token, usertoken, clientid)

Get Client All Notifications

Get all notifications for a client

### Example
```javascript
var ApiDocumentation = require('api-documentation');

var apiInstance = new ApiDocumentation.ClientNotificationsApi()

var token = "token_example"; // {String} The API partner's authorization token

var usertoken = "usertoken_example"; // {String} The client's session token

var clientid = 789; // {Integer} Client Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getAllNotificationsUsingGET(token, usertoken, clientid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| The API partner&#39;s authorization token | 
 **usertoken** | **String**| The client&#39;s session token | 
 **clientid** | **Integer**| Client Id | 

### Return type

[**[Notification]**](Notification.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getNotificationsUsingGET"></a>
# **getNotificationsUsingGET**
> [Notification] getNotificationsUsingGET(token, usertoken, clientid)

Get Client Active Notifications

Get active notifications for a client

### Example
```javascript
var ApiDocumentation = require('api-documentation');

var apiInstance = new ApiDocumentation.ClientNotificationsApi()

var token = "token_example"; // {String} The API partner's authorization token

var usertoken = "usertoken_example"; // {String} The client's session token

var clientid = 789; // {Integer} Client Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getNotificationsUsingGET(token, usertoken, clientid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| The API partner&#39;s authorization token | 
 **usertoken** | **String**| The client&#39;s session token | 
 **clientid** | **Integer**| Client Id | 

### Return type

[**[Notification]**](Notification.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="setPushTokenUsingPOST"></a>
# **setPushTokenUsingPOST**
> Object setPushTokenUsingPOST(token, usertoken, clientid, pushtoken, opts)

Set the push notification token

Set the push notification token for the client device

### Example
```javascript
var ApiDocumentation = require('api-documentation');

var apiInstance = new ApiDocumentation.ClientNotificationsApi()

var token = "token_example"; // {String} The API partner's authorization token

var usertoken = "usertoken_example"; // {String} The client's session token

var clientid = 789; // {Integer} Client Id

var pushtoken = "pushtoken_example"; // {String} The client device's token to be used for push notifications

var opts = { 
  'deviceid': "deviceid_example" // {String} The client device's unique id
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.setPushTokenUsingPOST(token, usertoken, clientid, pushtoken, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| The API partner&#39;s authorization token | 
 **usertoken** | **String**| The client&#39;s session token | 
 **clientid** | **Integer**| Client Id | 
 **pushtoken** | **String**| The client device&#39;s token to be used for push notifications | 
 **deviceid** | **String**| The client device&#39;s unique id | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: */*

