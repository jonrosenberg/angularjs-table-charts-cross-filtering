/**
 *  Cross filter data with google charts and table filter 
 */
'use strict';


// Load angular google charts module
google.setOnLoadCallback(function () {
    angular.bootstrap(document.body, ['myApp']);
});
google.load('visualization', '1', {packages: ['corechart']});


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

myApp.controller('AppCtrl', ['$scope', '$filter', 'Data', function($scope, $filter, Data) {
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
    console.log($filter('filter')($scope.app.friends,$scope.search,false).length);
    var chart1 = {};
    chart1.type = "PieChart";
    chart1.displayed = false;
    chart1.cssStyle = "height:600px; width:100%;";
    chart1.data =  {
        "cols": [
            {id: "attendence", label: "Attendence", type: "string"},
            {id: "count", label: "Count", type: "number"}
        ], 
        "rows": [
            {c: [
                {v: "Here"},
                {v: $scope.app.friends.length}
            ]},
            {c: [
                {v: "Missing"},
                {v: 0 }
            ]}
    ]};


    chart1.options = {
        "title": "Attendence",
        "isStacked": "true",
        "fill": 20,
        "displayExactValues": true,
        "vAxis": {
            "title": "Sales unit", "gridlines": {"count": 10}
        },
        "hAxis": {
            "title": "Date"
        }
    };
    $scope.chart = chart1;
    console.log($scope);
}]);

