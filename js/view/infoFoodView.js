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
var InfoFoodView = function (container, model) {


  this.siteContent = container.find("#site-content");

  var numberOfGuests = model.getNumberOfGuests();
  var selectedDishes = model.getFullMenu();

  var id = 3; // TODO FIXERINO
  var displayedDish = selectedDishes[id];
  var imgSrc = "images/"+displayedDish.image;
  var foodName = displayedDish.name;
  var foodDesc = displayedDish.description;


  var totalMenuPrice = model.getMenuPrice(displayedDish.id);

  var ingredients = displayedDish.ingredients;
  var ingredientsHtml = "";
  for (key in ingredients) {

     var unit = ingredients[key].unit;
     var quantity = ingredients[key].quantity;
     var name = ingredients[key].name;
     var cost = ingredients[key].price * model.getNumberOfGuests();

     var itemHtml = `
     <li class="col-sm-12">
         <div class="row">
             <div class="col">`+quantity+` `+unit+`</div>
             <div class="col">`+name+`</div>
             <div class="col">
                 SEK `+cost+`
             </div>
         </div>
     </li>`;

    ingredientsHtml += itemHtml;
  }

  var html =
              `<div class="row">
                  <div class="container col-md-6 padTop col-sm-12">
                      <h3>`+foodName+`</h3>
                      <img class="foodBigImg" src="`+imgSrc+`"/>
                      <br/>
                      <p>`+foodDesc+`</p>
                      <button>Back To Search</button>
                      <br/><br/>
                  </div>
                  <div class="container-fluid col-md-6 col-sm-12">
                      <div id="ingredientBox" class="container-fluid col-xs-12 lightYellow text-left">

                          <div id="ingredients" class="col-sm-12">
                              <p>Ingredients for <span>`+numberOfGuests+`</span> people</p>
                              <hr>
                              <div class="col-sm-12 row">
                              <ul id="ingredientList" class="col-sm-12">
                                  `+ingredientsHtml+`
                              </ul>
                              </div>
                          </div>

                          <div id="ingredientSummary" class="col-sm-12">
                              <hr>
                              <div class="row">
                                  <div class="col">
                                      <button class="yellow text-left">
                                          Add to menu
                                      </button>
                                  </div>
                                  <div class="col">
                                      <p class="text-right">SEK <span>`+totalMenuPrice+`</span></p>
                                  </div>
                              </div>

                          </div>

                      </div>
                  </div>
              </div>
              <div class="row">

                  <div class="container col-md-12 padTop">
                      <h3>Preparation</h3>
                      <p>Lorem</p>
                  </div>

              </div>`;

	/**
	 * Here we use @var {jQuery object} numberOfGuests that is a reference to <span>
	 * in our view to dynamically set it's value to "Hello World".
	 */

  this.siteContent.html(html);

  // Add menu.
  var cartView = new CartView(container, model);
}
