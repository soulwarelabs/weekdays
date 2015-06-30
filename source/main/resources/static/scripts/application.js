var angular = require("angular"),
    angularRouter = require("angular-ui-router");

var application = angular.module("application", ['ui.router']);

application.config(["$locationProvider", function ($locationProvider) {
    $locationProvider.html5Mode(true);
}]);

application.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/intouch');

    $stateProvider
        .state('application', {
            url: '/',
            views: {
                header: {
                    templateUrl: 'resources/templates/header.html',
                    controller: 'headerController'
                },
                footer: {
                    templateUrl: 'resources/templates/footer.html'
                }
            }
        })

        .state('application.engineering', {
            url: 'engineering',
            views: {
                'content@': {
                    templateUrl: 'resources/templates/engineering.html'
                }
            }
        })

        .state('application.science', {
            url: 'science',
            views: {
                'content@': {
                    templateUrl: 'resources/templates/science.html'
                }
            }
        })

        .state('application.music', {
            url: 'music',
            views: {
                'content@': {
                    templateUrl: 'resources/templates/music.html'
                }
            }
        })

        .state('application.places', {
            url: 'places',
            views: {
                'content@': {
                    templateUrl: 'resources/templates/places.html'
                }
            }
        })

        .state('application.beyond', {
            url: 'beyond',
            views: {
                'content@': {
                    templateUrl: 'resources/templates/beyond.html'
                }
            }
        })       

        .state('application.intouch', {
            url: 'intouch',
            views: {
                'content@': {
                    templateUrl: 'resources/templates/intouch.html'
                }
            }
        });
});

application.controller('headerController', function ($scope, $http) {

    $http.get('resources/models/threads.json')
            .success(function (threads) {
        $scope.threads = threads;
    });
});
