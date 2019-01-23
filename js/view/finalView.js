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

	/**
	 * We use the @method find() on @var {jQuery object} container to look for various elements
	 * inside the view in orther to use them later on. For instance:
	 *
	 * @var {jQuery object} numberOfGuests is a reference to the <span> element that
	 * represents the placeholder for where we want to show the number of guests. It's
	 * a reference to HTML element (wrapped in jQuery object for added benefit of jQuery methods)
	 * and we can use it to modify <span>, for example to populate it with dynamic data (for now
	 * only 'Hello world', but you should change this by end of Lab 1).
	 *
	 * We use variables when we want to make the reference private (only available within) the
	 * ExampleView.
	 *
	 * IMPORTANT: Never use $('someSelector') directly in the views. Always use container.find
	 * or some other way of searching only among the containers child elements. In this way you
	 * make your view code modular and ensure it dosn't break if by mistake somebody else
	 * in some other view gives the same ID to another element.
	 *
	 */

	/**
	 * When we want references to some view elements to be available from outside of view, we
	 * define them as this.someName. We don't need this in Lab 1 yet, but in Lab 2 it
	 * will be important for assigning listeners to these buttons, because the listeners
	 * should not be assigned in the view, but rather in controller.
	 *
	 * We can then, in some other code, use exampleView.plusButton to reference the
	 * this button and do something with it (see Lab 2).
	 *
	 */
	this.numberOfGuests = container.find("#numberOfGuests");
	this.foodItems = container.find("#foodItems");

  var selectedDishes = model.getFullMenu();
  var items = [];
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

      items.push(itemHtml);
  }

	/**
	 * Here we use @var {jQuery object} numberOfGuests that is a reference to <span>
	 * in our view to dynamically set it's value to "Hello World".
	 */

  this.numberOfGuests.html(model.getNumberOfGuests());
  this.foodItems.html(items);


	this.update=function(model, changeDetails){
     // redraw just the portion affected by the changeDetails
     // or remove all graphics in the view, read the whole model and redraw
	}
	model.addObserver(this.update);

}
