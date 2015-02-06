angular.module('voteIt', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate','firebase']);

angular.module('voteIt').config(function($routeProvider) {

    $routeProvider.when('/home',{templateUrl: 'home/home.html'});
    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/home'});

});

angular.module('voteIt').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
