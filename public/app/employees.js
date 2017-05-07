app.controller('EmployeesCtrl', function($scope, Employee, ngProgress, toaster) {

$scope.emp = new Employee();

var refresh = function() {
  $scope.emps = Employee.query(); 
  $scope.emp ="";
}
refresh();

$scope.add = function(emp) {
  Employee.save(emp,function(emp){
    refresh();
  });
};

$scope.update = function(emp) {
  emp.$update(function(){
    refresh();
  });
};

$scope.remove = function(emp) {
  console.log(emp);
  emp.$delete(function(){
    refresh();
  });
};

$scope.edit = function(id) {

  $scope.emp = Employee.get({ id: id });
   console.log(emp);
};  

$scope.deselect = function() {
  $scope.emp = "";
}



//--
//$scope.emp = {dob: "00/00/0000", age: 0 } // your object which refers to ng-model
$scope.myAgeFunction = function(){ //your function goes here
  
  var ageDifs = Date.now() -  new Date($scope.emp.dob).getTime();
    var ageDate = new Date(ageDifs); // miliseconds 
    $scope.emp.age= Math.abs(ageDate.getUTCFullYear() - 1970);

     
     //$scope.emp.age =daysTill($scope.emp.dob);
//  var parsedServerOutTime = moment(new Date(), "YYYY-MM-DD HH:mm:ss");
// var parsedServerInTime = moment($scope.emp.dob, "YYYY-MM-DD HH:mm:ss");

// var milliseconds= parsedServerOutTime.diff(parsedServerInTime) //default milliseconds
// var years = moment.duration(parsedServerOutTime .diff(parsedServerInTime )).asYears();
//     $scope.emp.age =years;
    // console.log($scope.emp.age +" from Employee.js");
  
};
//--   

 // Returns the days between a & b date objects...
// Calculate how many days between now and an event...
// function daysTill(e) {
//     var eventE = new Date(e);
//     var today =  new Date();
//     var _MS_PER_DAY = 1000 * 60 * 60 * 24;
//     // Discard the time and time-zone information.
//     var utc1 = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
//     var utc2 = Date.UTC(eventE.getFullYear(), eventE.getMonth(), eventE.getDate());
//     return Math.floor((utc1 - utc2) / _MS_PER_DAY);
   
// }


})