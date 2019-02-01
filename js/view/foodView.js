var FoodView = function (container, model) {

  this.container = container;

  const menuTypes = ["main course", "side dish", "dessert", "appetizer", "salad", "bread", "breakfast", "soup", "beverage", "sauce", "drink"];

  var getFoodItems = function(allDishes){
    var items = "";
	  for(key in allDishes){
	    var foodID = allDishes[key].id;
	    var foodName = allDishes[key].title;
      var imgSrc;
      if (!allDishes[key].imageUrls[0]) {
        imgSrc = "images/default.jpg";
      } else {
	      imgSrc = "https://spoonacular.com/recipeImages/"+allDishes[key].imageUrls[0];
      }
	    var fill = `<div class="food-image" id="${foodID}">
	                    <div>
	                        <img src="${imgSrc}"/>
	                    </div>
	                    <div id="food-name">
	                        <p>${foodName}</p>
	                    </div>
	                </div>`;
	    items+=fill;
	  }
    return items;
  }
	this.init = function() {

    // Promise to fill items
	  model.getShowDishes().then(data => {
      var allDishes = data;
      var items = getFoodItems(allDishes);
      if (items) {
        container.find("#itemDiv").html(items);
      }
      refreshControllers();
    }).catch(error => model.errorMsg(error));

	  // Fill rest for now.
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
    	                    <option value="main course">Main Course</option>
    	                    <option value="side dish">Side Dish</option>
    	                    <option value="appetizer">Appetizer</option>
                          <option value="dessert">Dessert</option>
                          <option value="salad">Salad</option>
                          <option value="bread">Bread</option>
                          <option value="breakfast">Breakfast</option>
                          <option value="soup">Soup</option>
                          <option value="beverage">Beverage</option>
                          <option value="sauce">Sauce</option>
                          <option value="drink">Drink</option>
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
                    <h1 class="fas fa-pizza-slice fa-spin text-center"></h1>
    	            </div>
    	            <div class="d-md-none col-sm-2 col-1"></div>
    	        </div>
    	      </div>
    	  </div>`;

	  this.container.html(html);

	}

	// Display the view when rendered.
  this.init();

	this.update=function(model, changeDetails){
     var showDishes = model.getShowDishes().then(data => {
       var items = getFoodItems(data);
       container.find("#itemDiv").html(items);
       refreshControllers();
     }).catch(error => model.errorMsg(error));
     container.find("#itemDiv").html('<h1 class="fas fa-pizza-slice fa-spin text-center"></h1>');
     refreshControllers();
	}
	model.addObserver(this.update);
}
