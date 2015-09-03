angular.module('master', [])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    // provide a wrapper controller and view that is gloabl.
    $stateProvider
    .state('view', {
        abstract: true,
        url: '',
        views: {
            '@': {
                templateUrl: 'app/views/app-layout.html',
                controller: 'MasterController'
            }
        }
    })
}])
.controller('MasterController', ['$rootScope', '$location', '$scope', '$state', function($rootScope, $location, $scope , $state) {


    // HELPER FUNCTIONS

    // check if the device is mobile
    $rootScope.isMobile = function() {
        var isMobile = window.matchMedia("only screen and (max-width: 768px)");
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || isMobile.matches;
    }

    /**
     * Get url parameters. Used to pass data from the url to the program.
     * url: google.com/?name=jeremy&email=hey@test.com
     * name: the url parameter you want to get. email
     * return: The value associated with the url param. Otherwise null. For the name 'email', it would return email=hey@test.com.
     */
    $rootScope.get_url_parameter = function(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\\+/g, " "));
    }

    $rootScope.encode_query_data = function(data) {
        var ret = [];
        for (var d in data)
            ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
        return ret.join("&");
    }

    // check if the browser is on a localhost.
    $rootScope.isLocalhost = function() {
        var local = ['localhost', '0.0.0.0'];
        return (_.contains(local, document.domain));
    }

    // create a unique tracking code.
    $rootScope.guid = function() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

    $rootScope.isJson = function(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }

    // scroll to the top of the page.
    // When going from step2 -> step3, starts at the middle of the page. 
    $rootScope.scrollToTop = function() {
        setTimeout(function() {
            window.scrollTo(0, 0);
        }, 1);
    }

}])
.run(function($rootScope, $location, $state) {

    // set some global params to be used anywhere.
    // add underscore to the root scope, so can be used in templates
    $rootScope._ = _;

    // keep track of the urls we have been to. 
    var history = [];
    // go back to previous state.
    $rootScope.back = function () {
        var prevUrl = history.length > 1 ? history.splice(-2)[0] : "/";
        $location.path(prevUrl);
    };

    $rootScope.$watch(function() { 
        return $location.path(); 
    }, function(loc) {
        $rootScope.loc = loc || '';
    });

});