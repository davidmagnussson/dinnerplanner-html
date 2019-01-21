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
var CartView = function (container, model) {

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
  this.cart = container.find("#cart");

  // NOTE: ONLY FOR TESTING!
  model.addDishToMenu(1);
  model.addDishToMenu(100);
  model.addDishToMenu(200);

  var guests = model.getNumberOfGuests();
  var selectedDishes = model.getFullMenu();
	var menuPrice = model.getTotalMenuPrice();
  var items = "";
  for(key in selectedDishes){
    var foodName = selectedDishes[key].name;
		var foodCost = model.getMenuPrice(selectedDishes[key].id);
    var fill = `<div class="cart-item row text-center">
        <p id="foodName" class="text-left col">`+foodName+`</p>
        <p id="food-cost" class="text-right" id="food-cost">`+foodCost+`</p>
        </div>`;
    items+=fill;
  }


  var content =`<div id="header-in-cart" class="row">
      <div class="col">
          <strong>My Dinner</strong>
      </div>
      <div class="d-block d-md-none">
          <strong><span class="total_cost"></span></strong>
          <button data-toggle="collapse" data-target="#on-mobile-collapse" type="button" id="menu-button" id="menu-button">
              <i class="fas fa-bars"></i>
          </button>
      </div>
  </div>
  <div id="on-mobile-collapse">
      <br/>
      <form id="num-people-form">
          <div class="form-group row">
              <label for="number-of-people" class="col">People</label>
              <input class="form-control col" type="number" value="`+guests+`" min="1" id="number-of-people"/>
          </div>
      </form>
      <div id="cart-description" class="row">
          <div class="col-md-12 col-lg-12 col-sm-12 row">
              <p class="text-left col">Dish Name</p>
              <p class="text-right">Cost</p>
          </div>
      </div>

      <div class="container-fluid"> <!--Detta är det som skiljer prototypbild 2 och 4-->
        `+items+`
      </div>

      <div id="menu-list container-fluid">
          <p class="text-right">SEK <span class="total_cost">`+menuPrice+`</span></p>
          <div class="text-center">
              <button>Confirm Order</button>
          </div><br/>
      </div>
  </div>`;


	/**
	 * Here we use @var {jQuery object} numberOfGuests that is a reference to <span>
	 * in our view to dynamically set it's value to "Hello World".
	 */

  this.numberOfGuests.html(model.getNumberOfGuests());
  this.cart.html(content);

}