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
var FinalView = function (container, model) {

	this.viewDiv = container;

	this.init = function() {
		var numberOfGuests = model.getNumberOfGuests();

	  var selectedDishes = model.getFullMenu();
	  var foodItems = "";
	  for (key in selectedDishes) {
	     var imgSrc = selectedDishes[key].image;
	     var foodName = selectedDishes[key].name;
	     var foodDesc = selectedDishes[key].description;
	     var itemHtml = `<!-- ITEM #`+key+` -->
	          <div class="row itemDiv">

	              <!-- ITEM #`+key+` IMG -->
	              <div class="col-sm-4 col-3 d-md-none"></div>
	              <div class="col-md-3 col-sm-4 col-6 itemDiv">
	                  <img src="images/`+imgSrc+`" class="blackBorder"/>
	              </div>
	              <div class="col-sm-4 col-3 d-md-none"></div>

	              <div class="col-md-9 col-12 row">

	                  <!-- ITEM #`+key+` NAME/DESC -->
	                  <div class="col-md-4">
	                      <h3>`+foodName+`</h3>
	                      <p>`+foodDesc+`</p>
	                  </div>

	                  <!-- ITEM #`+key+` PREP -->
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
																<h3 class="text-left">My Dinner: <span>`+numberOfGuests+`</span> people</h3>
														</div>
												</div>
												<div class="col-md-6">
														<button class="float-right">
																Go back and edit dinner
														</button>
												</div>
										</div>
								</div>

								<div class="restDiv col-md-12">
									`+foodItems+`
								</div>


						 </div>`;

	  this.viewDiv.html(html);

	}

	// Display the view when rendered.
  this.init();

	this.update=function(model, changeDetails){
     // redraw just the portion affected by the changeDetails
     // or remove all graphics in the view, read the whole model and redraw
		 this.init();
	}
	model.addObserver(this.update);

}
