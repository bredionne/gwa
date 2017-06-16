'use strict';

angular.module('core').controller('NavCtrl', ['$scope', '$state', function($scope, $state){
   /*
    $scope.PartialTest = "Modify me in Core Module's Nav Controller";

    $scope.localeMenu = Menus.getMenu('locales');
    $scope.localeMenuItems = $scope.localeMenu.items;

    $scope.topBarMenu = Menus.getMenu('topBar');
    $scope.topBarMenuItems = $scope.topBarMenu.items;

    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
    };
*/
    $scope.about = false;
    $scope.involved = false;

    $scope.routeToNew = function (path) {
        $state.go(path);
    }
}]);