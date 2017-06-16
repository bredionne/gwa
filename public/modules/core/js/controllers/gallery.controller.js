'use strict';

angular.module('core')
    .controller('GalleryCtrl', ['$scope', function($scope){
        $scope.ControllerTest = "Modify me in core Module";

        $scope.noWrapSlides = false;
        $scope.active = 0;

        $scope.slides = [];

        for (var i = 1; i < 55; i++) {
            $scope.slides.push({
                image: '/modules/core/img/gallery/Picture' + i + '.png',
                id: i
            });
        }
}]);
