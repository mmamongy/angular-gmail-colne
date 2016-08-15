(function (){
var app = angular.module('store', []) ;

app.controller('PanelController', function () {
	this.tab = 1 ;
	this.selectTab = function(setTab){
		this.tab = setTab ;
	} ;
	this.isSelected = function(checkTab){
		return this.tab === checkTab ;
	} ;
});
app.controller('orderController',  ,function($scope){
this.orders = {} ;
$scope.options=["meat", "fish" , "chicken" , "Vigte"]
}) ;

var order = {
	Q : 0 ,
	combo : false , 
	spicy : false
};

var meal = [
{
	name: "Hot Dog", 
	Category: "X",
	price : "25", 
}, {
	name: "Hot Dog 1", 
	Category: "Y",
	price : "15", 
}, {
	name: "Hot Dog 2", 
	Category: "X",
	price : "25", 
}, {
	name: "Hot Dog 3", 
	Category: "Y",
	price : "20", 
},	{ name: "Hot Dog", 
	Category: "X",
	price : "12", 
}] ; 

})();
