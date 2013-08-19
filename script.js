/**
 *  Script
 */

var myApp = angular.module("myApp", ['googlechart.directives']);

myApp.factory('Data', function() {
    return {
        message: "I'm alive",
        friends: [
                 {name:'John', phone:'555-1276', age: 53},
                 {name:'Mary', phone:'800-BIG-MARY', age: 23},
                 {name:'Mike', phone:'555-4321', age: 13},
                 {name:'Adam', phone:'555-5678', age: 45},
                 {name:'Julie', phone:'555-8765', age: 43},
                 {name:'John', phone:'545-1276', age: 53},
                 {name:'Juliette', phone:'555-5678', age: 29}
                ]
    }
});

myApp.controller('AppCtrl', ['$scope', 'Data', function($scope, Data) {
    console.log(Data);
    $scope.app = {}
    $scope.app.data = Data; 
    $scope.app.message = "In AppCtrl"; 
    var friends = [
                 {name:'John II', phone:'555-1276', age: 53},
                 {name:'Mary', phone:'800-BIG-MARY', age: 23},
                 {name:'Mike', phone:'555-4321', age: 13},
                 {name:'Adam', phone:'555-5678', age: 45},
                 {name:'Julie', phone:'555-8765', age: 43},
                 {name:'John II', phone:'545-1276', age: 53},
                 {name:'Juliette', phone:'555-5678', age: 29}
                ];
    $scope.app.friends = friends;
    console.log($scope);
}]);
// angular.module('google-chart-sample', ['googlechart.directives']).controller("SampleCtrl", function ($scope) {

//     var chart1 = {};
//     chart1.type = "AreaChart";
//     chart1.displayed = false;
//     chart1.cssStyle = "height:600px; width:100%;";
//     chart1.data = {"cols": [
//         {id: "month", label: "Month", type: "string"},
//         {id: "laptop-id", label: "Laptop", type: "number"},
//         {id: "desktop-id", label: "Desktop", type: "number"},
//         {id: "server-id", label: "Server", type: "number"}
//     ], "rows": [
//         {c: [
//             {v: "January"},
//             {v: 19, f: "42 items"},
//             {v: 12, f: "Ony 12 items"},
//             {v: 7, f: "7 servers"}
//         ]},
//         {c: [
//             {v: "February"},
//             {v: 13},
//             {v: 1, f: "1 unit (Out of stock this month)"},
//             {v: 12}
//         ]},
//         {c: [
//             {v: "March"},
//             {v: 24},
//             {v: 5},
//             {v: 11}

//         ]}
//     ]};

//     chart1.options = {
//         "title": "Sales per month",
//         "isStacked": "true",
//         "fill": 20,
//         "displayExactValues": true,
//         "vAxis": {
//             "title": "Sales unit", "gridlines": {"count": 10}
//         },
//         "hAxis": {
//             "title": "Date"
//         }
//     };  

//     $scope.chart = chart1;

//     $scope.hideServer = false;
//     $scope.selectionChange = function () {
//         if($scope.hideServer) {
//             $scope.chart.view = {columns: [0,1,2]};
//         } else {
//             $scope.chart.view = {};
//         }
//     }

// });