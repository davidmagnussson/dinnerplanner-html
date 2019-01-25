var signal;
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

	var showing, controller;

	function showFrontPageView(){
		showing = new FrontPageView($("#viewDiv"), model);
		controller = new FrontPageViewController(showing, model);
	}

	function showFoodView(){
		showing = new FoodView($("#viewDiv"), model);
		controller = new FoodViewController(showing, model);
	}

	function showInfoFoodView(){
		showing = new InfoFoodView($("#viewDiv"), model);
		controller = new InfoFoodViewController(showing, model);
	}

	function showOverviewView(){
		showing = new OverviewView($("#viewDiv"), model);
		controller = new OverviewViewController(showing, model);
	}

	function showFinalView(){
		showing = new FinalView($("#viewDiv"), model);
		controller = new FinalViewController(showing, model);
	}

	// Init frontpage:
	showFrontPageView();

	// General State Controller:
 	signal = function(btnId){
		if(btnId == "createDinner") {
			showFoodView();
		}
	}
	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children
	 * of the specific view you're working with (see exampleView.js).
	 */

});
