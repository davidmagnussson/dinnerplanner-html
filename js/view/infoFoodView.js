var InfoFoodView = function (container, model, foodId) {

  this.container = container;

  var totalIngredientCost = 0;

  var getDisplayedDish = function(){
    var displayedDish = "";
    var dishes = model.getAllDishes("all", "");

    for (key in dishes) {
      if (dishes[key].id == foodId) {
        displayedDish = dishes[key];
        break;
      }
    }
    return displayedDish;
  }

  var getIngredients = function(ingredients){
    var ingredientsHtml = "";
    for (key in ingredients) {
       var unit = ingredients[key].unit;
       var quantity = ingredients[key].quantity * model.getNumberOfGuests();
       var name = ingredients[key].name;
       var cost = ingredients[key].price * model.getNumberOfGuests();
       totalIngredientCost += cost; // Add to total.

       var itemHtml = `
       <li class="ingredientItem col-sm-12">
           <div class="row">
               <div id="quantityAndUnit" class="col">${quantity} ${unit}</div>
               <div id="name" class="col">${name}</div>
               <div class="col">
                   SEK ${cost}
               </div>
           </div>
           <br>
       </li>`;

      ingredientsHtml += itemHtml;
    }
    return ingredientsHtml;
  }

  this.init = function() {
    var numberOfGuests = model.getNumberOfGuests();
    var selectedDishes = model.getFullMenu();


    var id = foodId;
    var displayedDish = getDisplayedDish();

    var imgSrc = "images/"+displayedDish.image;
    var foodName = displayedDish.name;
    var foodDesc = displayedDish.description;

    var totalMenuPrice = model.getMenuPrice(displayedDish.id);

    var ingredients = displayedDish.ingredients;
    var ingredientsHtml = getIngredients(ingredients);

    var html =
                `<div class="row">
                    <div class="container col-md-6 padTop col-sm-12">
                        <h3>${foodName}</h3>
                        <img class="foodBigImg" src="${imgSrc}"/>
                        <br/>
                        <p>${foodDesc}</p>
                        <button id="backToSearch">Back To Search</button>
                        <br/><br/>
                    </div>
                    <div class="container-fluid col-md-6 col-sm-12">
                        <div id="ingredientBox" class="container-fluid col-xs-12 lightYellow text-left">

                            <div id="ingredients" class="col-sm-12">
                                <p>Ingredients for <span id="numberOfGuests">${numberOfGuests}</span> people</p>
                                <hr>
                                <div class="col-sm-12 row">
                                <ul id="ingredientList" class="col-sm-12">
                                    ${ingredientsHtml}
                                </ul>
                                </div>
                            </div>

                            <div id="ingredientSummary" class="col-sm-12">
                                <hr>
                                <div class="row">
                                    <div class="col">
                                        <button id="addToMenu" data-food-id="${id}" class="yellow text-left">
                                            Add to menu
                                        </button>
                                    </div>
                                    <div class="col">
                                        <p class="text-right">SEK <span id="totalMenuPrice">${totalMenuPrice}</span></p>
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

    this.container.html(html);

  }

  // Display the view when rendered.
  this.init();

  this.update=function(model, changeDetails){
     // redraw just the portion affected by the changeDetails
     totalIngredientCost = 0;
     var displayedDish = getDisplayedDish();
     var ingredients = getIngredients(displayedDish.ingredients);

     container.find("#ingredientList").html(ingredients);
     container.find("#numberOfGuests").text(model.getNumberOfGuests());
     container.find("#totalMenuPrice").text(totalIngredientCost);

	}
	model.addObserver(this.update);
}
