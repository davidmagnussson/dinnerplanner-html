var FinalView = function (container, model) {

	this.container = container;

	this.init = function() {
		var numberOfGuests = model.getNumberOfGuests();

	  var selectedDishes = model.getFullMenu();
	  var foodItems = "";
	  for (key in selectedDishes) {
	     var imgSrc = selectedDishes[key].image;
	     var foodName = selectedDishes[key].name;
	     var foodDesc = selectedDishes[key].description;
	     var itemHtml = `<!-- ITEM # ${key} -->
	          <div class="row itemDiv">

	              <!-- ITEM # ${key} IMG -->
	              <div class="col-sm-4 col-3 d-md-none"></div>
	              <div class="col-md-3 col-sm-4 col-6 itemDiv">
	                  <img src="images/${imgSrc}" class="blackBorder"/>
	              </div>
	              <div class="col-sm-4 col-3 d-md-none"></div>

	              <div class="col-md-9 col-12 row">

	                  <!-- ITEM # ${key} NAME/DESC -->
	                  <div class="col-md-4">
	                      <h3>${foodName}</h3>
	                      <p>${foodDesc}</p>
	                  </div>

	                  <!-- ITEM #${key} PREP -->
	                  <div class="col-md-8">
	                      <h5>Preparation</h5>
	                      <p>Lorem</p>
	                  </div>

	              </div>

	          </div>`;

	      foodItems += itemHtml;
	  }

		var html =
						`<div class="row">
								<div id="myDinner" class="container-fluid col-md-12">
										<div class="row">
												<div class="col-md-6 row">
														<div class="col-md-2"></div>
														<div class="col-md-10">
																<h3 class="text-left">My Dinner: <span>${numberOfGuests}</span> people</h3>
														</div>
												</div>
												<div class="col-md-6">
														<button id="backToSearch" class="float-right">
																Go back and edit dinner
														</button>
												</div>
										</div>
								</div>

								<div class="restDiv col-md-12">
									${foodItems}
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
