var app = angular.module("urpoApp", ["xeditable"]);

app.run(function(editableOptions) {
  editableOptions.theme = 'default'; //bootstrap3 theme. Can be also 'bs2', 'default'
});

app.controller('AddHostController',function($scope){
    //push the owner into the array of Proj_Owners
    $scope.addOwner=function(){
        console.log("I want to add Owner now!!");
        //console.log($scope.project.Project_Owners[0].Name);
        $scope.project.Project_Owners.push({"Name":"林岳暉","EmpID":"622828"});
    }

    $scope.removeOwner = function(ownerToRemove) {
        var index = $scope.project.Project_Owners.indexOf(ownerToRemove);
        $scope.project.Project_Owners.splice(index, 1);
    };

});

app.controller('AddInvestController',function($scope){
    //push the owner into the array of Proj_Owners
    $scope.addInvest=function(){
        console.log("I want to add an investigator now!!");
        //console.log($scope.project.Project_Owners[0].Name);
        $scope.project.Principal_Investigators.push({"Name":"邱俊誠","EmpID":"622828"});
    }

    $scope.removeInvest = function(investToRemove) {
        var index = $scope.project.Principal_Investigators.indexOf(investToRemove);
        $scope.project.Principal_Investigators.splice(index, 1);
    };
});

app.controller('MainCtrl', function($scope) {

    $scope.showCalenderStart=function(){
    	console.log(GET_LASTUPDATE()[0].edit_state);
        $( "#dateStart" ).datepicker();
        $( "#dateStart" ).datepicker("show");    
    }

    $scope.showCalenderEnd=function(){
    	$( "#dateEnd" ).datepicker();
        $( "#dateEnd" ).datepicker("show");
    }

    $scope.project = {
        Category: 'URPO',
        Dept: 'Life Science',
        Project_Name: '我是專案名稱',
        Project_Description:'我是描述',
        Institution:"CMU中國醫藥大學",
        Estimated_Start_Date: new Date(1984, 4, 15),
        Estimated_End_Date: new Date(1984, 4, 15),
        Region:"Taiwan",
        Competence:" competence",
        Collaboration_Model:"一年?",
        Project_Agreement_Status:"階段",
        Currency:"幣制",
        Cash_Funding:"預計金額",
        Project_Owners:[{"Name":"林岳暉","EmpID":"622828"}],
        Principal_Investigators:[
        	{
    		"Name":"邱俊誠",
    		"Email":"T17988@mail.cmuh.org.tw",
    		"Website":""
    		}
        ],
        Milestone:[
        {
        	"name":"Planning",
        	"start_time":"Planning",
        	"end_time":"Planning",
        	"status":"",
        	"description":"",
        	"file":[
        		{
        			"file_name":"tmp.txt",
        			"file_path":"/dir1/dir2/tmp.txt"
        		},
        		{
        			"file_name":"tmp2.txt",
    				"file_path":"/dir1/dir2/tmp2.txt"
        		}
        	]
        }],
        edit_state:[
        	{
        		"add_or_edit":"edit",
    			"edit_person":"林岳暉",
    			"edit_column":"Project_Description"
        	},
        	{
        		"add_or_edit":"add",
    			"edit_person":"Joan",
    			"edit_column":"Project_Name"
        	}
        ],
        file_system:{},
        memo:"Hello world!!!"
    }; 
  
    
});
