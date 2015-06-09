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
                    templateUrl: 'resources/templates/header.html'
                },
                footer: {
                    templateUrl: 'resources/templates/footer.html'
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
