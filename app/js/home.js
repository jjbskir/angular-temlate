angular.module('home', ['master'])

.config(['$stateProvider', function($stateProvider) {

   $stateProvider
   .state('view.home', {
      url: '/',
      views: {
         'detail@view' : {
            templateUrl: 'app/views/home.html',
            controller: 'HomeCtrl'
         }
      }
   })
   .state('view.about', {
      url: '/about',
      views: {
         'detail@view' : {
            templateUrl: 'app/views/about.html',
            controller: 'AboutCtrl'
         }
      }
   })

}])

.controller('HomeCtrl', function($rootScope, $scope) {
   $scope.name = 'Jeremy';
})

.controller('AboutCtrl', function($rootScope, $scope) {
   $scope.tags = [
      { text: 'Python' },
      { text: 'Java' },
      { text: 'PHP' },
      { text: 'JavaScript' },
      { text: 'HTML' },
      { text: 'CSS' },
      { text: 'SQL' },
      { text: 'MySQL' },
      { text: 'PostgreSQL' },
      { text: 'MongoDB' },
      { text: 'jQuery' },
      { text: 'Backbone' },
      { text: 'Angular' },
      { text: 'Symfony' },
      { text: 'PyQt' },
      { text: 'Django' },
      { text: 'Wordpress' },
      { text: 'Express' },
      { text: 'Parse' },
      { text: 'Enthough' },
      { text: 'numpy' },
      { text: 'scipy' },
      { text: 'Arduino' }
   ];
})


