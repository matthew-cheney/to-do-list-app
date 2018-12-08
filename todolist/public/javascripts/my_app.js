/*global angular*/
angular.module('myApp', []).
controller('myController', ['$scope', '$http',
    function($scope, $http) {

        $http.get('/user/profile')
            .success(function(data, status, headers, config) {
                $scope.user = data;
                console.log(data);
                document.body.style.backgroundColor = "#" + $scope.user.color;
                $scope.error = "";
            }).
        error(function(data, status, headers, config) {
            $scope.user = {};
            $scope.error = data;
        });

        function update(jscolor) {
            // 'jscolor' instance can be used as a string
            $scope.user
            //document.getElementById('rect').style.backgroundColor = '#' + jscolor
        }
        $scope.toggleStatus = function() {
            console.log($scope.user);
            $http.post('/user/update', $scope.user)
                .success(function() {
                    console.log("status updated");
                })
        }
        $scope.deleteItem = function(index) {
            $scope.user.todolist.splice(index, 1);
            $http.post('/user/update', $scope.user)
                .success(function() {
                    console.log("item deleted");
                })
        };
        $scope.deleteUser = function() {
            if ($scope.deleteTest == "delete" || $scope.deleteTest == "DELETE" || $scope.deleteTest == "Delete") {
                document.getElementById("delete").disabled = false;
            }
            else {
                document.getElementById("delete").disabled = true;
            }
        }
        $scope.updateColor = function() {
            $http.post('/user/update', $scope.user)
                .success(function() {
                    console.log("color updated");
                    console.log($scope.user);
                    document.body.style.backgroundColor = "#" + $scope.user.color;
                });
        };
        document.getElementById('taskTitle').focus();
        document.getElementById('taskTitle').select();

    }
]);
