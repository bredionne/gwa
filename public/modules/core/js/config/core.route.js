'use strict';

angular.module('core')
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state("root",
            {
                views: {
                    "": {
                        template: '<div ui-view=""></div>'
                    },
                    "nav": {
                        controller: "NavCtrl",
                        templateUrl: "modules/core/views/nav.html"
                    },
                    "footer": {
                        controller: "FooterCtrl",
                        templateUrl: "modules/core/views/footer.html"
                    }
                }
            })
            .state("home",
            {
                parent: "root",
                url: "/",
                views: {
                    "": {
                        controller: "CoreCtrl",
                        templateUrl: "modules/core/views/index.html"
                    }
                }
            })
            .state("about",
                {
                    parent:"root",
                    url:"/about",
                    views:{
                        "":{
                            controller:"AboutCtrl",
                            templateUrl:"modules/core/views/about.html"
                        }
                    }
                })
            .state("bios",
                {
                    parent:"root",
                    url:"/bios",
                    views:{
                        "":{
                            controller:"BiosCtrl",
                            templateUrl:"modules/core/views/bios.html"
                        }
                    }
                })
            .state("gallery",
                {
                    parent:"root",
                    url:"/gallery",
                    views:{
                        "":{
                            controller:"GalleryCtrl",
                            templateUrl:"modules/core/views/gallery.html"
                        }
                    }
                })
            .state("volunteer",
                {
                    parent:"root",
                    url:"/volunteer",
                    views:{
                        "":{
                            controller:"VolunteerCtrl",
                            templateUrl:"modules/core/views/volunteer.html"
                        }
                    }
                });
    }]).run(['$state', function ($state) {
        $state.transitionTo('home');
    }]);