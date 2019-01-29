var OverviewView = function (container, model) {

	this.container = container;

	this.init = function() {
		var numberOfGuests = model.getNumberOfGuests();
		var totalMenuPrice = model.getTotalMenuPrice();

	  var selectedDishes = model.getFullMenu();
	  var foodItems = "";
	  for (key in selectedDishes) {
	     var imgSrc = selectedDishes[key].image;
	     var foodName = selectedDishes[key].name;
	     var foodCost = model.getMenuPrice(selectedDishes[key].id);
	     var itemHtml = `<!-- ITEM # ${key} -->
			 <div class="d-md-none col-sm-4 col-2"></div>
			 <div class="col-md-4 col-sm-4 col-8">
					 <div class="food-image">
							 <div>
									 <img src="images/${imgSrc}"/>
							 </div>
							 <div id="food-name">
									 <p>${foodName}</p>
							 </div>
							 <p class="text-right">SEK ${foodCost}</p>
					 </div>
			 </div>
			 <div class="d-md-none col-sm-4 col-2"></div>`;

	      foodItems += itemHtml;
	  }

		var html =
		        `<div class="row">
		            <div id="myDinner" class="container-fluid col-md-12">
		                <div class="row">
		                    <div class="col-md-6 col-sm-12 row">
		                        <div class="col-md-2"></div>
		                        <div class="col-md-10">
		                            <h3 class="text-left">My Dinner: <span>${numberOfGuests}</span> people</h3>
		                        </div>
		                    </div>
		                    <div class="col-md-6 col-sm-12">
		                        <button id="backToSearch" class="float-right">
		                            Go back and edit dinner
		                        </button>
		                    </div>
		                </div>
		            </div>

		            <div class="restDiv col-md-12">
		                <div id="meals" class="col-md-12 container-fluid">
		                    <div class="row">
		                        <div class="col-md-2"></div>
		                        <div id="mealsCenterDiv" class="col-md-8 jumbotron vertical-center">
		                            <!-- Iterate in content HERE!-->
		                            <div class="row">
																	${foodItems}
		                            </div>
		                        </div>
		                        <div class="col-md-2">
		                            <div style="height:28.2vh;" class="d-none d-md-block d-lg-block"></div>
		                            Total: <br> <span>${totalMenuPrice}</span> SEK
		                        </div>
		                    </div>
		                    <hr>
		                </div>

		                <div class="col-md-12">
		                    <p class="text-center">
		                        <button id="printRecipe">Print Full Recipe</button>
		                    </p>
		                </div>

		            </div>

		         </div>`;

	  this.container.html(html);

	}

	// Display the view when rendered.
  this.init();

	this.update=function(model, changeDetails){
		 this.init();
	}
	model.addObserver(this.update);

}
