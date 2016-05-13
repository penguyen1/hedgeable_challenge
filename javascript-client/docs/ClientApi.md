# ApiDocumentation.ClientApi

All URIs are relative to *https://api.hedgeable.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUsingPOST1**](ClientApi.md#createUsingPOST1) | **POST** /client | Create A Client
[**getAllInfoUsingGET**](ClientApi.md#getAllInfoUsingGET) | **GET** /client/{clientid}/getallinformation | Get all information
[**getBalancesUsingGET1**](ClientApi.md#getBalancesUsingGET1) | **GET** /client/{clientid}/performance | Get Client Performance
[**getHoldingsUsingGET1**](ClientApi.md#getHoldingsUsingGET1) | **GET** /client/{clientid}/holdings | Get Client Holdings
[**getTransactionsUsingGET1**](ClientApi.md#getTransactionsUsingGET1) | **GET** /client/{clientid}/transactions | Get Client Transactions
[**getUsingGET1**](ClientApi.md#getUsingGET1) | **GET** /client/{clientid} | Get client
[**loginUsingPOST**](ClientApi.md#loginUsingPOST) | **POST** /client/login | Login a user
[**logoutUsingPOST**](ClientApi.md#logoutUsingPOST) | **POST** /client/{clientid}/logout | Logout a user
[**refreshTokenUsingPOST**](ClientApi.md#refreshTokenUsingPOST) | **POST** /client/{clientid}/refreshtoken | Refresh the user token
[**resetPasswordUsingPUT**](ClientApi.md#resetPasswordUsingPUT) | **PUT** /client/resetpassword | Reset passoword
[**updateUsingPUT1**](ClientApi.md#updateUsingPUT1) | **PUT** /client/{clientid} | Update A Client


<a name="createUsingPOST1"></a>
# **createUsingPOST1**
> Client createUsingPOST1(token, email, password, firstname, lastname, opts)

Create A Client

Create / Sign up a user

### Example
```javascript
var ApiDocumentation = require('api-documentation');

var apiInstance = new ApiDocumentation.ClientApi()

var token = "token_example"; // {String} The API partner's authorization token

var email = "email_example"; // {String} The client's email

var password = "password_example"; // {String} The client's password

var firstname = "firstname_example"; // {String} The client's first name

var lastname = "lastname_example"; // {String} The client's last name

var opts = { 
  'logintype': "email", // {String} The client's login type. Used in case of social login.
  'loginid': "0", // {String} The client's login id. Used in case of social login.
  'country': "US", // {String} The client's country of primary residence
  'phone': "phone_example", // {String} The client's primary phone number
  'custom': "custom_example" // {String} Any custom fields for the client to update. The custom fields must be a json string of name-value pairs
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createUsingPOST1(token, email, password, firstname, lastname, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| The API partner&#39;s authorization token | 
 **email** | **String**| The client&#39;s email | 
 **password** | **String**| The client&#39;s password | 
 **firstname** | **String**| The client&#39;s first name | 
 **lastname** | **String**| The client&#39;s last name | 
 **logintype** | **String**| The client&#39;s login type. Used in case of social login. | [optional] [default to email]
 **loginid** | **String**| The client&#39;s login id. Used in case of social login. | [optional] [default to 0]
 **country** | **String**| The client&#39;s country of primary residence | [optional] [default to US]
 **phone** | **String**| The client&#39;s primary phone number | [optional] 
 **custom** | **String**| Any custom fields for the client to update. The custom fields must be a json string of name-value pairs | [optional] 

### Return type

[**Client**](Client.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getAllInfoUsingGET"></a>
# **getAllInfoUsingGET**
> ClientAggregateInfo getAllInfoUsingGET(token, usertoken, clientid)

Get all information

Get all information for a client

### Example
```javascript
var ApiDocumentation = require('api-documentation');

var apiInstance = new ApiDocumentation.ClientApi()

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
api.getAllInfoUsingGET(token, usertoken, clientid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| The API partner&#39;s authorization token | 
 **usertoken** | **String**| The client&#39;s session token | 
 **clientid** | **Integer**| Client Id | 

### Return type

[**ClientAggregateInfo**](ClientAggregateInfo.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getBalancesUsingGET1"></a>
# **getBalancesUsingGET1**
> BalancesMap getBalancesUsingGET1(token, usertoken, clientid, opts)

Get Client Performance

Get all aggregated performance stats for a client

### Example
```javascript
var ApiDocumentation = require('api-documentation');

var apiInstance = new ApiDocumentation.ClientApi()

var token = "token_example"; // {String} The API partner's authorization token

var usertoken = "usertoken_example"; // {String} The client's session token

var clientid = 789; // {Integer} Client Id

var opts = { 
  'startdate': "startdate_example", // {String} Start date of the performance stats. Please enter the date in the format YYYY-MM-DD. Leave blank to get the performance stats from inception.
  'enddate': "enddate_example" // {String} Last date of the performance stats. Please enter the date in the format YYYY-MM-DD. Leave blank to get the performance till date.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getBalancesUsingGET1(token, usertoken, clientid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| The API partner&#39;s authorization token | 
 **usertoken** | **String**| The client&#39;s session token | 
 **clientid** | **Integer**| Client Id | 
 **startdate** | **String**| Start date of the performance stats. Please enter the date in the format YYYY-MM-DD. Leave blank to get the performance stats from inception. | [optional] 
 **enddate** | **String**| Last date of the performance stats. Please enter the date in the format YYYY-MM-DD. Leave blank to get the performance till date. | [optional] 

### Return type

[**BalancesMap**](BalancesMap.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getHoldingsUsingGET1"></a>
# **getHoldingsUsingGET1**
> [Holding] getHoldingsUsingGET1(token, usertoken, clientid)

Get Client Holdings

Get the current holdings for a client

### Example
```javascript
var ApiDocumentation = require('api-documentation');

var apiInstance = new ApiDocumentation.ClientApi()

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
api.getHoldingsUsingGET1(token, usertoken, clientid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| The API partner&#39;s authorization token | 
 **usertoken** | **String**| The client&#39;s session token | 
 **clientid** | **Integer**| Client Id | 

### Return type

[**[Holding]**](Holding.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getTransactionsUsingGET1"></a>
# **getTransactionsUsingGET1**
> [Transaction] getTransactionsUsingGET1(token, usertoken, clientid, opts)

Get Client Transactions

Get all transactions for a client

### Example
```javascript
var ApiDocumentation = require('api-documentation');

var apiInstance = new ApiDocumentation.ClientApi()

var token = "token_example"; // {String} The API partner's authorization token

var usertoken = "usertoken_example"; // {String} The client's session token

var clientid = 789; // {Integer} Client Id

var opts = { 
  'startdate': "startdate_example", // {String} Start date of the transactions. Please enter the date in the format YYYY-MM-DD. Leave blank to get the transactions from inception.
  'enddate': "enddate_example" // {String} Last date of the transactions. Please enter the date in the format YYYY-MM-DD. Leave blank to get the transactions till date.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getTransactionsUsingGET1(token, usertoken, clientid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| The API partner&#39;s authorization token | 
 **usertoken** | **String**| The client&#39;s session token | 
 **clientid** | **Integer**| Client Id | 
 **startdate** | **String**| Start date of the transactions. Please enter the date in the format YYYY-MM-DD. Leave blank to get the transactions from inception. | [optional] 
 **enddate** | **String**| Last date of the transactions. Please enter the date in the format YYYY-MM-DD. Leave blank to get the transactions till date. | [optional] 

### Return type

[**[Transaction]**](Transaction.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getUsingGET1"></a>
# **getUsingGET1**
> Client getUsingGET1(token, usertoken, clientid)

Get client

Get basic information for a client

### Example
```javascript
var ApiDocumentation = require('api-documentation');

var apiInstance = new ApiDocumentation.ClientApi()

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
api.getUsingGET1(token, usertoken, clientid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| The API partner&#39;s authorization token | 
 **usertoken** | **String**| The client&#39;s session token | 
 **clientid** | **Integer**| Client Id | 

### Return type

[**Client**](Client.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="loginUsingPOST"></a>
# **loginUsingPOST**
> [Client] loginUsingPOST(token, email, password, opts)

Login a user

Login a user by providing the email and password of the user. The client object is returned.

### Example
```javascript
var ApiDocumentation = require('api-documentation');

var apiInstance = new ApiDocumentation.ClientApi()

var token = "token_example"; // {String} The API partner's authorization token

var email = "email_example"; // {String} Email of the client

var password = "password_example"; // {String} Password of the client

var opts = { 
  'logintype': "email", // {String} The type of login. Only relevant for social sign ups.
  'username': "0", // {String} The username for the above login type. Only relevant for social sign ups.
  'custom': "custom_example" // {String} The custom string to pass with additional information about this login. This should be a string with the following format: \"custom\": '{\"sign_up_platform\":\"mobile\",\"device\":\"iphone6\"}'
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.loginUsingPOST(token, email, password, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| The API partner&#39;s authorization token | 
 **email** | **String**| Email of the client | 
 **password** | **String**| Password of the client | 
 **logintype** | **String**| The type of login. Only relevant for social sign ups. | [optional] [default to email]
 **username** | **String**| The username for the above login type. Only relevant for social sign ups. | [optional] [default to 0]
 **custom** | **String**| The custom string to pass with additional information about this login. This should be a string with the following format: \&quot;custom\&quot;: &#39;{\&quot;sign_up_platform\&quot;:\&quot;mobile\&quot;,\&quot;device\&quot;:\&quot;iphone6\&quot;}&#39; | [optional] 

### Return type

[**[Client]**](Client.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="logoutUsingPOST"></a>
# **logoutUsingPOST**
> Object logoutUsingPOST(token, usertoken, clientid)

Logout a user

Logout a user.

### Example
```javascript
var ApiDocumentation = require('api-documentation');

var apiInstance = new ApiDocumentation.ClientApi()

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
api.logoutUsingPOST(token, usertoken, clientid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| The API partner&#39;s authorization token | 
 **usertoken** | **String**| The client&#39;s session token | 
 **clientid** | **Integer**| Client Id | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="refreshTokenUsingPOST"></a>
# **refreshTokenUsingPOST**
> Client refreshTokenUsingPOST(token, usertoken, clientid)

Refresh the user token

Refresh and retrieve the user tokens. The client object is returned.

### Example
```javascript
var ApiDocumentation = require('api-documentation');

var apiInstance = new ApiDocumentation.ClientApi()

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
api.refreshTokenUsingPOST(token, usertoken, clientid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| The API partner&#39;s authorization token | 
 **usertoken** | **String**| The client&#39;s session token | 
 **clientid** | **Integer**| Client Id | 

### Return type

[**Client**](Client.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="resetPasswordUsingPUT"></a>
# **resetPasswordUsingPUT**
> Object resetPasswordUsingPUT(token, email)

Reset passoword

Reset the client password and send an email to the client with the new password

### Example
```javascript
var ApiDocumentation = require('api-documentation');

var apiInstance = new ApiDocumentation.ClientApi()

var token = "token_example"; // {String} The API partner's authorization token

var email = "email_example"; // {String} The client's email


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.resetPasswordUsingPUT(token, email, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| The API partner&#39;s authorization token | 
 **email** | **String**| The client&#39;s email | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="updateUsingPUT1"></a>
# **updateUsingPUT1**
> &#39;Integer&#39; updateUsingPUT1(token, usertoken, clientid, opts)

Update A Client

Create / Sign up a user

### Example
```javascript
var ApiDocumentation = require('api-documentation');

var apiInstance = new ApiDocumentation.ClientApi()

var token = "token_example"; // {String} The API partner's authorization token

var usertoken = "usertoken_example"; // {String} The client's session token

var clientid = 789; // {Integer} Client Id

var opts = { 
  'email': "email_example", // {String} The client's email to update. Leave blank to not update.
  'password': "password_example", // {String} The client's passwordto update. Leave blank to not update.
  'logintype': "logintype_example", // {String} The client's login type to update. Leave blank to not update.
  'loginid': "loginid_example", // {String} The client's login id to update. Leave blank to not update.
  'firstname': "firstname_example", // {String} The client's first name to update. Leave blank to not update.
  'lastname': "lastname_example", // {String} The client's last name to update. Leave blank to not update.
  'country': "country_example", // {String} The client's country of primary residence to update. Leave blank to not update.
  'phone': "phone_example", // {String} The client's primary phone number to update. Leave blank to not update.
  'custom': "custom_example" // {String} Any custom fields for the client to update. The custom fields must be a json string of name-value pairs
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.updateUsingPUT1(token, usertoken, clientid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| The API partner&#39;s authorization token | 
 **usertoken** | **String**| The client&#39;s session token | 
 **clientid** | **Integer**| Client Id | 
 **email** | **String**| The client&#39;s email to update. Leave blank to not update. | [optional] 
 **password** | **String**| The client&#39;s passwordto update. Leave blank to not update. | [optional] 
 **logintype** | **String**| The client&#39;s login type to update. Leave blank to not update. | [optional] 
 **loginid** | **String**| The client&#39;s login id to update. Leave blank to not update. | [optional] 
 **firstname** | **String**| The client&#39;s first name to update. Leave blank to not update. | [optional] 
 **lastname** | **String**| The client&#39;s last name to update. Leave blank to not update. | [optional] 
 **country** | **String**| The client&#39;s country of primary residence to update. Leave blank to not update. | [optional] 
 **phone** | **String**| The client&#39;s primary phone number to update. Leave blank to not update. | [optional] 
 **custom** | **String**| Any custom fields for the client to update. The custom fields must be a json string of name-value pairs | [optional] 

### Return type

**&#39;Integer&#39;**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: */*

