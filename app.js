var app = angular.module("urpoApp", ["xeditable"]);

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
    Estimated_Start_Date: new Date(1984, 4, 15),
    Estimated_End_Date: new Date(1984, 4, 15),
    Region:"Taiwan",
    Competence:" competence?",
    Collaboration_Model:"",
    Project_Agreement_Status:"",
    Currency:"",
    Cash_Funding:"",
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
