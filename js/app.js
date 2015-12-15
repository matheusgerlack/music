(function(){
	//Sites array from my portfolio
    var mySites = [

  	  { src: "img/Vera.png", alt:"- Vera Gerlack Arquiteta -", address:"http://matheusgerlack.github.io/vera-gerlack-arquiteta/" },
  	  { src: "img/Mari.png", alt:"- Trabalho Faculdade -", address:"http://matheusgerlack.github.io/mari-fer/" },
  	  { src: "img/Lucas.png", alt:"- Lucas Correa Fotografia -", address:"http://matheusgerlack.github.io/lucas-correa-fotografia/" }
    
    ];
  //intialize the app
  var app = angular.module('myResumeApp', []);
  	  //control de portfolio items, but right now will control in the panelcontroller below 
	  app.controller('PortfolioController', function(){
	  });

	  //control the panel toggling
	  app.controller('PanelController', function(){
	  	  this.portfolio = mySites;

		  this.tab = 1; //set the initial value

		  this.selectTab = function(setTab){
		  	this.tab = setTab; //change the tab value
		  };

		  this.isSelected = function(checkTab){
		  	return this.tab === checkTab; //check which tab is selected
		  };

	  });

})();
