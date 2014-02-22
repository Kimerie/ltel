console.log("loading cdexApp");

var cdexApp = angular.module('cdexApp', [
  'ngRoute' // add controllers here
]);

cdexApp.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider.
      when('/top', {
        templateUrl: 'app/partials/top.html',
        controller: 'TopController'
      }).
      when('/record', {
        templateUrl: 'app/partials/record.html',
        controller: 'RecordController'
      }).
      when('/events', {
        templateUrl: 'app/partials/events.html',
        controller: 'EventsController'
      }).
      when('/parser', {
        templateUrl: 'app/partials/parser.html',
        controller: 'ParserController'
      }).      
      when('/faqs', {
        templateUrl: 'app/partials/faqs.html',
        controller: 'FaqsController'
      }).

      otherwise({
        redirectTo: '/top'
      });
  }]);

cdexApp.factory('EventService', function ($http) {
  var EventService = {};

  EventService.async = function () {

    var promise = $http.get('/json/events.json')
      .then(function (response) {
        console.log(response);
        return response.data;
      });

    return promise;
  };
  return EventService;
})

cdexApp.factory('FaqService', function () {
  var faqs = [
    {
      "question": "ask me a question",
      "answer": "and i'll give you an answer!"
    },
    {
      "question": "ask me a question",
      "answer": "and i'll give you an answer!"
    },
    {
      "question": "ask me a question",
      "answer": "and i'll give you an answer!"
    },
    {
      "question": "ask me a question",
      "answer": "and i'll give you an answer!"
    },
    {
      "question": "ask me a question",
      "answer": "and i'll give you an answer!"
    },
    {
      "question": "ask me a question",
      "answer": "and i'll give you an answer!"
    },
    {
      "question": "ask me a question",
      "answer": "and i'll give you an answer!"
    },
    {
      "question": "ask me a question",
      "answer": "and i'll give you an answer!"
    },
    {
      "question": "ask me a question",
      "answer": "and i'll give you an answer!"
    }
  ];

  return {
    data: faqs
  }
});


cdexApp.controller('TopController', function ($scope) {
  $scope.message = 'top page';
});


cdexApp.controller('EventsController', function ($scope, EventService) {
  $scope.message = 'events here';
  EventService.async().then(function (data) {
    $scope.events = data.schedules;
  });
});

cdexApp.controller('FaqsController', function ($scope, FaqService) {
  $scope.message = 'Just the FAQs';
  $scope.faqs = FaqService.data;
});


cdexApp.controller('RecordController', function ($scope) {
  $scope.message = 'recording!';
});

cdexApp.controller('ParserController', function ($scope) {
  $scope.message = 'parsing!';
});

cdexApp.directive('cxNavBarItem', function ($location) {
  return {
    scope: {
      cxHref: '@'
    },
    restrict: 'A',
    transclude: true,
    template: '<a href="{{ cxHref }}" ng-transclude></a>',

    link: function (scope, element, attrs, controller) {
      scope.$on('$routeChangeSuccess', function (event, current, previous) {
        var pathLevel = attrs.cxNavBarItem || 1,
          // this var finds what the path is at the level specified
          pathToCheck = $location.path().split('/')[pathLevel],
          // this var finds grabs the same level of the href attribute
          tabLink = element.find('a').attr('href').split('/')[pathLevel];

        if (pathToCheck === tabLink) {
          element.addClass("active");
        }
        else {
          element.removeClass("active");
        }
      })
    }
  }
})
