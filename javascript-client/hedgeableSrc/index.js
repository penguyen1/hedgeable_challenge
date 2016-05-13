(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['./ApiClient', './HedgeableModel/AccountAggregateInfo', './HedgeableModel/AccountType', './HedgeableModel/AlertSetting', './HedgeableModel/BalancesMap', './HedgeableModel/Benchmark', './HedgeableModel/Client', './HedgeableModel/ClientAccount', './HedgeableModel/ClientAggregateInfo', './HedgeableModel/Country', './HedgeableModel/DateValue', './HedgeableModel/Holding', './HedgeableModel/Notification', './HedgeableModel/Security', './HedgeableModel/Statistics', './HedgeableModel/Transaction', './HedgeableApi/AccountTypesApi', './HedgeableApi/AuthenticationApi', './HedgeableApi/BenchmarksApi', './HedgeableApi/ClientApi', './HedgeableApi/ClientAccountApi', './HedgeableApi/ClientNotificationsApi', './HedgeableApi/CountriesApi', './HedgeableApi/SecuritiesApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./HedgeableModel/AccountAggregateInfo'), require('./HedgeableModel/AccountType'), require('./HedgeableModel/AlertSetting'), require('./HedgeableModel/BalancesMap'), require('./HedgeableModel/Benchmark'), require('./HedgeableModel/Client'), require('./HedgeableModel/ClientAccount'), require('./HedgeableModel/ClientAggregateInfo'), require('./HedgeableModel/Country'), require('./HedgeableModel/DateValue'), require('./HedgeableModel/Holding'), require('./HedgeableModel/Notification'), require('./HedgeableModel/Security'), require('./HedgeableModel/Statistics'), require('./HedgeableModel/Transaction'), require('./HedgeableApi/AccountTypesApi'), require('./HedgeableApi/AuthenticationApi'), require('./HedgeableApi/BenchmarksApi'), require('./HedgeableApi/ClientApi'), require('./HedgeableApi/ClientAccountApi'), require('./HedgeableApi/ClientNotificationsApi'), require('./HedgeableApi/CountriesApi'), require('./HedgeableApi/SecuritiesApi'));
  }
}(function(ApiClient, AccountAggregateInfo, AccountType, AlertSetting, BalancesMap, Benchmark, Client, ClientAccount, ClientAggregateInfo, Country, DateValue, Holding, Notification, Security, Statistics, Transaction, AccountTypesApi, AuthenticationApi, BenchmarksApi, ClientApi, ClientAccountApi, ClientNotificationsApi, CountriesApi, SecuritiesApi) {
  'use strict';

  /**
   * Api Documentation.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var ApiDocumentation = require('./index'); // See note below*.
   * var xxxSvc = new ApiDocumentation.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new ApiDocumentation.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['./index'], function(){...}) and put the application logic within the
   * callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new ApiDocumentation.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new ApiDocumentation.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AccountAggregateInfo model constructor.
     * @property {module:HedgeableModel/AccountAggregateInfo}
     */
    AccountAggregateInfo: AccountAggregateInfo,
    /**
     * The AccountType model constructor.
     * @property {module:HedgeableModel/AccountType}
     */
    AccountType: AccountType,
    /**
     * The AlertSetting model constructor.
     * @property {module:HedgeableModel/AlertSetting}
     */
    AlertSetting: AlertSetting,
    /**
     * The BalancesMap model constructor.
     * @property {module:HedgeableModel/BalancesMap}
     */
    BalancesMap: BalancesMap,
    /**
     * The Benchmark model constructor.
     * @property {module:HedgeableModel/Benchmark}
     */
    Benchmark: Benchmark,
    /**
     * The Client model constructor.
     * @property {module:HedgeableModel/Client}
     */
    Client: Client,
    /**
     * The ClientAccount model constructor.
     * @property {module:HedgeableModel/ClientAccount}
     */
    ClientAccount: ClientAccount,
    /**
     * The ClientAggregateInfo model constructor.
     * @property {module:HedgeableModel/ClientAggregateInfo}
     */
    ClientAggregateInfo: ClientAggregateInfo,
    /**
     * The Country model constructor.
     * @property {module:HedgeableModel/Country}
     */
    Country: Country,
    /**
     * The DateValue model constructor.
     * @property {module:HedgeableModel/DateValue}
     */
    DateValue: DateValue,
    /**
     * The Holding model constructor.
     * @property {module:HedgeableModel/Holding}
     */
    Holding: Holding,
    /**
     * The Notification model constructor.
     * @property {module:HedgeableModel/Notification}
     */
    Notification: Notification,
    /**
     * The Security model constructor.
     * @property {module:HedgeableModel/Security}
     */
    Security: Security,
    /**
     * The Statistics model constructor.
     * @property {module:HedgeableModel/Statistics}
     */
    Statistics: Statistics,
    /**
     * The Transaction model constructor.
     * @property {module:HedgeableModel/Transaction}
     */
    Transaction: Transaction,
    /**
     * The AccountTypesApi service constructor.
     * @property {module:HedgeableApi/AccountTypesApi}
     */
    AccountTypesApi: AccountTypesApi,
    /**
     * The AuthenticationApi service constructor.
     * @property {module:HedgeableApi/AuthenticationApi}
     */
    AuthenticationApi: AuthenticationApi,
    /**
     * The BenchmarksApi service constructor.
     * @property {module:HedgeableApi/BenchmarksApi}
     */
    BenchmarksApi: BenchmarksApi,
    /**
     * The ClientApi service constructor.
     * @property {module:HedgeableApi/ClientApi}
     */
    ClientApi: ClientApi,
    /**
     * The ClientAccountApi service constructor.
     * @property {module:HedgeableApi/ClientAccountApi}
     */
    ClientAccountApi: ClientAccountApi,
    /**
     * The ClientNotificationsApi service constructor.
     * @property {module:HedgeableApi/ClientNotificationsApi}
     */
    ClientNotificationsApi: ClientNotificationsApi,
    /**
     * The CountriesApi service constructor.
     * @property {module:HedgeableApi/CountriesApi}
     */
    CountriesApi: CountriesApi,
    /**
     * The SecuritiesApi service constructor.
     * @property {module:HedgeableApi/SecuritiesApi}
     */
    SecuritiesApi: SecuritiesApi
  };

  return exports;
}));
