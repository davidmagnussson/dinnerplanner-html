$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	// NOTE: ONLY FOR TESTING!
	model.addDishToMenu(1);
	model.addDishToMenu(100);
	model.addDishToMenu(200);

	model.removeDishFromMenu(100);
	model.setNumberOfGuests(5);
	model.addDishToMenu(101);

	// And create the instance of the default showing view

	var showing = new FrontPageView($("#viewDiv"), model);

	console.log(showing.createDinner.id);

	showing.createDinner.click(function(){
		console.log("CLICK");
		alert("CLICK");
	});




	var changeView = function(newViewObj){
		showing = newViewObj;
	}


	// var finalView = new FinalView($("#viewDiv"), model);
	//
	// var foodView = new FoodView($("#viewDiv"), model);
	//
	// var overviewView = new OverviewView($("#viewDiv"), model);
	//
	// var infoFoodView = new InfoFoodView($("#viewDiv"), model);


	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children
	 * of the specific view you're working with (see exampleView.js).
	 */

});
