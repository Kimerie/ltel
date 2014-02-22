var app = angular.module('casterdex', ['ui.bootstrap', 'ezfb']);

app.config(function ($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});

app.config(function ($FBProvider) {
    $FBProvider.setInitParams({
        // This is my FB app id for plunker demo app
        appId: '373753649392039'
    });
});

//app.config(function ($routeProvider) {
//  $routeProvider
//    .when('/', {
//      templateUrl: 'template/index.html',
//      controller: 'MainCtrl'
//    })
//    .when('/events', {
//      templateUrl: 'templates/events.html',
//      controller: 'EventCtrl'
//    })
//    .otherwise({
//      redirectTo: '/'
//    });
//});

app.factory('getEventsService', function ($http) {
  var getEventsService = {};

  getEventsService.async = function () {

    var promise = $http.get('/static/json/events.json')
      .then(function (response) {
        console.log(response);
        return response.data;
      });

    return promise;
  };
  return getEventsService;
})


app.controller('MainCtrl', function ($scope, $FB, getEventsService) {
    $scope.user = {
        greetings: "Hey"
    }

    getEventsService.async().then(function (data) {
      $scope.events = data;
      console.log(data);
    });


    $scope.login = function () {
        $FB.login(function (response) {
            /**
             * no manual $scope.$apply, I got that handled
             */
            if (response.authResponse) {
                updateLoginStatus(updateApiMe);
            }
        }, {scope: 'email,user_likes'});
    };

    $scope.logout = function () {
        $FB.logout(function () {
            updateLoginStatus(updateApiMe);
        });
    };
    function updateLoginStatus(more) {
        $FB.getLoginStatus(function (response) {
            $scope.loginStatus = response;
            if ($scope.loginStatus && $scope.loginStatus.status === 'connected' ) {
                $scope.user.connected = true;
            } else {
                $scope.user.connected = false;
            }
            (more || angular.noop)();
        });
    }

    function updateApiMe() {
        $FB.api('/me', function (response) {
            $scope.apiMe = response;
        });
    }
});
