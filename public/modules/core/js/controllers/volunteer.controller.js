'use strict';

angular.module('core')
    .controller('VolunteerCtrl', ['$scope', function($scope){

        $scope.volOptions = [
            {id:0, name:'-select-'},
            {id:1, name:'Facebook'},
            {id:2, name:'Friend'},
            {id:3, name:'Other'}
        ];

        $scope.submitInfo = function (name, email, selectedVolOption, travelHistory, volHistory, contribute) {
            if (name !== '' && name !== null && email !== null && email !== '' && selectedVolOption !== '' && selectedVolOption !== null && travelHistory !== null && travelHistory !== '' && volHistory !== '' && volHistory !== null && contribute !== null && contribute !== '') {
                if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
                    console.log('invalid email');
                }
                console.log(name, email, selectedVolOption, travelHistory, volHistory, contribute);
            }
        };
}]);
