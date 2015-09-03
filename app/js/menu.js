angular.module('app')

.controller('MenuController', ['$rootScope', '$scope', '$location', '$state', '$sce', function($rootScope, $scope, $location, $state, $sce) {

	// if the navbar is collapsed or not.
	$scope.navCollapsed = true;

	$scope.menuCtrl = [
        {
            name: "Home",
            state: "home",
            activeFor: ["home"],
            href: "#/"
        },
        {
            name: "About",
            state: "about",
            activeFor: ["about"],
            href: "#/about"
        }
	];

    // check if the menu item is active.
    $scope.isActive = function(menuItem) {
        var states = $state.current.name.split('.');
        parentState = states[0];
        childState = states[1];
    	if(_.indexOf(menuItem.activeFor, childState) > -1) {
    		return "active";
    	}
    };

}])




