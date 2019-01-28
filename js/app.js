var signal, refreshControllers;
$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	var template, showing, controller, subShowing, subController;

	function hideFullPage(yes){
		if (yes) {
			$("#fullPage").hide();
			$("#partialPage").show();
		} else {
			$("#partialPage").hide();
			$("#fullPage").show();
		}
	}

	function showFrontPageView(){
		hideFullPage(false);
		showing = new FrontPageView($("#fullPage"), model);
		controller = new FrontPageViewController(showing, model);
	}

	function showFoodView(){
		hideFullPage(true);
		showing = new FoodView($("#site-content"), model);
		controller = new FoodViewController(showing, model);
		subShowing = new CartView($("#cart"), model);
		subController = new CartViewController(subShowing, model);
	}

	function showInfoFoodView(id){
		hideFullPage(true);
		showing = new InfoFoodView($("#site-content"), model, id);
		controller = new InfoFoodViewController(showing, model);
		subShowing = new CartView($("#cart"), model);
		subController = new CartViewController(subShowing, model);
	}

	function showOverviewView(){
		hideFullPage(false);
		showing = new OverviewView($("#fullPage"), model);
		controller = new OverviewViewController(showing, model);
	}

	function showFinalView(){
		hideFullPage(false);
		showing = new FinalView($("#fullPage"), model);
		controller = new FinalViewController(showing, model);
	}

	refreshControllers = function(){
		controller = new FoodViewController(showing, model);
	}

	// Init frontpage:
	showFrontPageView();

	// General State Controller:
 	signal = function(btnId, details = ""){
		model.deleteObservers();
		if(btnId == "createDinner" || btnId == "backToSearch") {
			showFoodView();
		} else if(btnId == "food-image") {
			showInfoFoodView(details);
		} else if(btnId == "confirm") {
			showOverviewView();
		} else if(btnId == "printRecipe"){
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
