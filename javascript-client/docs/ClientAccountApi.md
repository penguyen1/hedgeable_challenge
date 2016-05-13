# ApiDocumentation.ClientAccountApi

All URIs are relative to *https://api.hedgeable.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUsingPOST**](ClientAccountApi.md#createUsingPOST) | **POST** /client/{clientid}/account | Create An Account
[**getBalancesUsingGET**](ClientAccountApi.md#getBalancesUsingGET) | **GET** /client/{clientid}/account/{accountid}/performance | Get Account Performance
[**getHoldingsUsingGET**](ClientAccountApi.md#getHoldingsUsingGET) | **GET** /client/{clientid}/account/{accountid}/holdings | Get Account Holdings
[**getTransactionsUsingGET**](ClientAccountApi.md#getTransactionsUsingGET) | **GET** /client/{clientid}/account/{accountid}/transactions | Get Account Transactions
[**getUsingGET**](ClientAccountApi.md#getUsingGET) | **GET** /client/{clientid}/account/{accountid} | Get An Account
[**searchUsingGET**](ClientAccountApi.md#searchUsingGET) | **GET** /client/{clientid}/account | Search An Account
[**updateUsingPUT**](ClientAccountApi.md#updateUsingPUT) | **PUT** /client/{clientid}/account/{accountid} | Update An Account


<a name="createUsingPOST"></a>
# **createUsingPOST**
> ClientAccount createUsingPOST(token, usertoken, clientid, name, opts)

Create An Account

Create an account for a client

### Example
```javascript
var ApiDocumentation = require('api-documentation');

var apiInstance = new ApiDocumentation.ClientAccountApi()

var token = "token_example"; // {String} The API partner's authorization token

var usertoken = "usertoken_example"; // {String} The client's session token

var clientid = 789; // {Integer} Client id

var name = "name_example"; // {String} Account name

var opts = { 
  'description': "description_example", // {String} Account description
  'type': 56, // {Integer} Account type. Please view the account types service to retrieve the id of the account type.
  'allocationid': 56, // {Integer} The allocation id of the client account.
  'custom': "custom_example" // {String} Any custom fields for the account. The custom fields must be a json string of name-value pairs
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createUsingPOST(token, usertoken, clientid, name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| The API partner&#39;s authorization token | 
 **usertoken** | **String**| The client&#39;s session token | 
 **clientid** | **Integer**| Client id | 
 **name** | **String**| Account name | 
 **description** | **String**| Account description | [optional] 
 **type** | **Integer**| Account type. Please view the account types service to retrieve the id of the account type. | [optional] 
 **allocationid** | **Integer**| The allocation id of the client account. | [optional] 
 **custom** | **String**| Any custom fields for the account. The custom fields must be a json string of name-value pairs | [optional] 

### Return type

[**ClientAccount**](ClientAccount.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getBalancesUsingGET"></a>
# **getBalancesUsingGET**
> BalancesMap getBalancesUsingGET(token, usertoken, clientid, accountid, opts)

Get Account Performance

Get the performance stats for a client account

### Example
```javascript
var ApiDocumentation = require('api-documentation');

var apiInstance = new ApiDocumentation.ClientAccountApi()

var token = "token_example"; // {String} The API partner's authorization token

var usertoken = "usertoken_example"; // {String} The client's session token

var clientid = 789; // {Integer} Client id

var accountid = 789; // {Integer} Client account id

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
api.getBalancesUsingGET(token, usertoken, clientid, accountid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| The API partner&#39;s authorization token | 
 **usertoken** | **String**| The client&#39;s session token | 
 **clientid** | **Integer**| Client id | 
 **accountid** | **Integer**| Client account id | 
 **startdate** | **String**| Start date of the performance stats. Please enter the date in the format YYYY-MM-DD. Leave blank to get the performance stats from inception. | [optional] 
 **enddate** | **String**| Last date of the performance stats. Please enter the date in the format YYYY-MM-DD. Leave blank to get the performance till date. | [optional] 

### Return type

[**BalancesMap**](BalancesMap.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getHoldingsUsingGET"></a>
# **getHoldingsUsingGET**
> [Holding] getHoldingsUsingGET(token, usertoken, clientid, accountid)

Get Account Holdings

Get the current holdings for a client account

### Example
```javascript
var ApiDocumentation = require('api-documentation');

var apiInstance = new ApiDocumentation.ClientAccountApi()

var token = "token_example"; // {String} The API partner's authorization token

var usertoken = "usertoken_example"; // {String} The client's session token

var clientid = 789; // {Integer} Client id

var accountid = 789; // {Integer} Client account id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getHoldingsUsingGET(token, usertoken, clientid, accountid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| The API partner&#39;s authorization token | 
 **usertoken** | **String**| The client&#39;s session token | 
 **clientid** | **Integer**| Client id | 
 **accountid** | **Integer**| Client account id | 

### Return type

[**[Holding]**](Holding.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getTransactionsUsingGET"></a>
# **getTransactionsUsingGET**
> [Transaction] getTransactionsUsingGET(token, usertoken, clientid, accountid, opts)

Get Account Transactions

Get the transactions for a client account

### Example
```javascript
var ApiDocumentation = require('api-documentation');

var apiInstance = new ApiDocumentation.ClientAccountApi()

var token = "token_example"; // {String} The API partner's authorization token

var usertoken = "usertoken_example"; // {String} The client's session token

var clientid = 789; // {Integer} Client id

var accountid = 789; // {Integer} Client account id

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
api.getTransactionsUsingGET(token, usertoken, clientid, accountid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| The API partner&#39;s authorization token | 
 **usertoken** | **String**| The client&#39;s session token | 
 **clientid** | **Integer**| Client id | 
 **accountid** | **Integer**| Client account id | 
 **startdate** | **String**| Start date of the transactions. Please enter the date in the format YYYY-MM-DD. Leave blank to get the transactions from inception. | [optional] 
 **enddate** | **String**| Last date of the transactions. Please enter the date in the format YYYY-MM-DD. Leave blank to get the transactions till date. | [optional] 

### Return type

[**[Transaction]**](Transaction.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getUsingGET"></a>
# **getUsingGET**
> ClientAccount getUsingGET(token, usertoken, clientid, accountid)

Get An Account

Get an account for a client

### Example
```javascript
var ApiDocumentation = require('api-documentation');

var apiInstance = new ApiDocumentation.ClientAccountApi()

var token = "token_example"; // {String} The API partner's authorization token

var usertoken = "usertoken_example"; // {String} The client's session token

var clientid = 789; // {Integer} Client id

var accountid = 789; // {Integer} Client account id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getUsingGET(token, usertoken, clientid, accountid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| The API partner&#39;s authorization token | 
 **usertoken** | **String**| The client&#39;s session token | 
 **clientid** | **Integer**| Client id | 
 **accountid** | **Integer**| Client account id | 

### Return type

[**ClientAccount**](ClientAccount.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="searchUsingGET"></a>
# **searchUsingGET**
> [ClientAccount] searchUsingGET(token, usertoken, clientid, opts)

Search An Account

Search an account for a client

### Example
```javascript
var ApiDocumentation = require('api-documentation');

var apiInstance = new ApiDocumentation.ClientAccountApi()

var token = "token_example"; // {String} The API partner's authorization token

var usertoken = "usertoken_example"; // {String} The client's session token

var clientid = 789; // {Integer} Client Id

var opts = { 
  'search': "search_example" // {String} The search string. Leave blank to retrieve all accounts.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.searchUsingGET(token, usertoken, clientid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| The API partner&#39;s authorization token | 
 **usertoken** | **String**| The client&#39;s session token | 
 **clientid** | **Integer**| Client Id | 
 **search** | **String**| The search string. Leave blank to retrieve all accounts. | [optional] 

### Return type

[**[ClientAccount]**](ClientAccount.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="updateUsingPUT"></a>
# **updateUsingPUT**
> &#39;Integer&#39; updateUsingPUT(token, usertoken, clientid, accountid, name, opts)

Update An Account

Update an account for a client

### Example
```javascript
var ApiDocumentation = require('api-documentation');

var apiInstance = new ApiDocumentation.ClientAccountApi()

var token = "token_example"; // {String} The API partner's authorization token

var usertoken = "usertoken_example"; // {String} The client's session token

var clientid = 789; // {Integer} Client id

var accountid = 789; // {Integer} Client account id

var name = "name_example"; // {String} Account name

var opts = { 
  'description': "description_example", // {String} Account description
  'type': 56, // {Integer} Account type. Please view the account types service to retrieve the id of the account type.
  'allocationid': 56, // {Integer} The allocation id of the client account.
  'custom': "custom_example" // {String} Any custom fields for the account. The custom fields must be a json string of name-value pairs
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.updateUsingPUT(token, usertoken, clientid, accountid, name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| The API partner&#39;s authorization token | 
 **usertoken** | **String**| The client&#39;s session token | 
 **clientid** | **Integer**| Client id | 
 **accountid** | **Integer**| Client account id | 
 **name** | **String**| Account name | 
 **description** | **String**| Account description | [optional] 
 **type** | **Integer**| Account type. Please view the account types service to retrieve the id of the account type. | [optional] 
 **allocationid** | **Integer**| The allocation id of the client account. | [optional] 
 **custom** | **String**| Any custom fields for the account. The custom fields must be a json string of name-value pairs | [optional] 

### Return type

**&#39;Integer&#39;**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: */*

