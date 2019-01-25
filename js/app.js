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

	var template, showing, controller, subShowing, subController;

	function showFrontPageView(){
		showing = new FrontPageView($("#viewDiv"), model);
		controller = new FrontPageViewController(showing, model);
	}

	function showFoodView(){
		template = new PartialPageView($("#viewDiv"), model);
		showing = new FoodView($("#site-content"), model);
		controller = new FoodViewController(showing, model);
		subShowing = new CartView($("#cart"), model);
		subController = new CartViewController(subShowing, model);
	}

	function showInfoFoodView(){
		template = new PartialPageView($("#viewDiv"), model);
		showing = new InfoFoodView($("#site-content"), model);
		controller = new InfoFoodViewController(showing, model);
		subShowing = new CartView($("#cart"), model);
		subController = new CartViewController(subShowing, model);
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
		if(btnId == "createDinner" || btnId == "backToSearch") {
			showFoodView();
		} else if(btnId == "search") {
			showFrontPageView(); // TODO: REMOVE! Just for demonstration.
		} else if(btnId == "confirm") {
			showOverviewView();
		} else if(btnId = "printRecipe"){
			showFinalView();
		}
	}
	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children
	 * of the specific view you're working with (see exampleView.js).
	 */

});
