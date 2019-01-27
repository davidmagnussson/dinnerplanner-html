/** ExampleView Object constructor
 *
 * This object represents the code for one specific view (in this case the Example view).
 *
 * It is responsible for:
 * - constructing the view (e.g. if you need to create some HTML elements procedurally)
 * - populating the view with the data
 * - updating the view when the data changes
 *
 * You should create a view Object like this for every view in your UI.
 *
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model
 */
var FoodView = function (container, model) {

  this.container = container;

  var getFoodItems = function(selectedDishes){
    var items = "";
	  for(key in selectedDishes){
	    var foodID = selectedDishes[key].id;
	    var foodName = selectedDishes[key].name;
	    var imgSrc = selectedDishes[key].image;
	    var fill = `<div class="food-image" id="`+foodID+`">
	                    <div>
	                        <img src="images/`+imgSrc+`"/>
	                    </div>
	                    <div id="food-name">
	                        <p>`+foodName+`</p>
	                    </div>
	                </div>`;
	    items+=fill;
	  }
    return items;
  }
	this.init = function() {
	  var selectedDishes = model.getShowDishes();
    var allSelected = "selected";
    var dessertSelected = "false";
    var starterSelected = "false";
    var mainSelected = "false";

	  var items = getFoodItems(selectedDishes);

	  var html =`
        <div class="row form-inline">
    	      <div style="height:15vh" class="col-md-12 d-none d-md-block d-lg-block" id="filter-div">
    	          <strong>FIND A DISH</strong>
    	          <form class="row" action="#" method="POST" id="filterForm">
    	              <div class="form-group col-md-4 col-sm-4">
    	                <input name="filter" id="filter" type="text" placeholder="Enter key words"/>
    	              </div>
    	              <div class="form-group col-md-6 col-sm-6 row" id="food-type">
    	                <select class="form-control col-md-12" id="type">
    	                    <option value="all">All</option>
    	                    <option value="main dish">Main Course</option>
    	                    <option value="starter">Starter</option>
                          <option value="dessert">Dessert</option>
    	                </select>
    	              </div>
    	              <div class="col-md-2 col-sm-2">
    	                <button id="search" type="submit">Search</button>
    	              </div>
    	          </form>
    	      </div>
    	      <div class="col-md-12 col-sm-12" id="food-menu">
    	        <div id="food-container" class="row"> <!--Innehåller alla maträtter-->
    	            <div class="d-md-none col-sm-4 col-3"></div>
    	            <div class="col-md-12 col-sm-4 col-8 row" id="itemDiv">
    	            `+items+`
    	            </div>
    	            <div class="d-md-none col-sm-2 col-1"></div>
    	        </div>
    	      </div>
    	  </div>`;


		/**
		 * Here we use @var {jQuery object} numberOfGuests that is a reference to <span>
		 * in our view to dynamically set it's value to "Hello World".
		 */

	  this.container.html(html);

	}

	// Display the view when rendered.
  this.init();

	this.update=function(model, changeDetails){
     var showDishes = model.getShowDishes();
     container.find("#itemDiv").html(getFoodItems(showDishes));
	}
	model.addObserver(this.update);
}
