define([
    'underscore',
    'Magento_Customer/js/customer-data',
    'domReady!'
], function (_, customerData) {
    'use strict';
    var _learnq = window._learnq || [];

    var result = function (config, element) {
        var customer = $.customerData.get('customer')();

        if(_.has(customer, 'email') && customer.email && !_learnq.isIdentified()) {
            _learnq.identify({
                '$email': customer.email,
                '$first_name': _.has(customer, 'firstname') ? customer.firstname : '',
                '$last_name':  _.has(customer, 'lastname') ? customer.lastname : ''
            });
        }
    }

    result.component = 'KlaviyoCustomerData';

    return result;
});
