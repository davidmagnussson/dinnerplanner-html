$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	// And create the instance of ExampleView
	var exampleView = new ExampleView($("#exampleView"), model);

	var finalView = new FinalView($("#finalView"), model);

	var foodView = new FoodView($("#page1"), model);

	var overviewView = new OverviewView($("#overviewView"), model);

	var infoFoodView = new InfoFoodView($("#infoFood"), model);


	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children
	 * of the specific view you're working with (see exampleView.js).
	 */

});
