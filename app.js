var app = angular.module("urpoApp", ["xeditable", "ui.bootstrap"]);

app.run(function(editableOptions) {
  editableOptions.theme = 'default'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

app.controller('Ctrl', function($scope) {
  $scope.project = {
    Category: 'URPO',
    Dept: 'Life Science',
    Project_Name: '我是專案名稱',
    Project_Description:'我是描述',
    Institution:"CMU中國醫藥大學",
    Estimated_Start_Date: new Date(1984, 4, 15)
  }; 
  
});
