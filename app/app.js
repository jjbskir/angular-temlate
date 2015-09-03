angular.module('app', [
    // other libraries
    'ui.router', 
    'ui.bootstrap',
    // controllers 
    'master',
    'home'
])


.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

	// IE compatibility
    jQuery.support.cors = true;
    // make sure console works in IE9 and below.
    // http://stackoverflow.com/questions/7742781/why-javascript-only-works-after-opening-developer-tools-in-ie-once
    if(!window.console) {window.console={}; window.console.log = function(){};}
    // add in trim functionality for IE8
    // http://stackoverflow.com/questions/2308134/trim-in-javascript-not-working-in-ie
    if(typeof String.prototype.trim !== 'function') {
        String.prototype.trim = function() {
            return this.replace(/^\s+|\s+$/g, '');
        };
    }

    // this is required for the root url to direct to /#/
    $urlRouterProvider.otherwise('/');

}]);