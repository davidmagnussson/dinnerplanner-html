var InfoFoodView = function (container, model, foodId) {

  this.container = container;

  var totalIngredientCost = 0;
  var pricePerServing;
  var ingredients;

  var getDisplayedDish = function(){
    var displayedDish = "";
    var dishes = model.getShowDishes();

    for (key in dishes) {
      if (dishes[key].id == foodId) {
        displayedDish = dishes[key];
        break;
      }
    }
    return displayedDish;
  }

  var getIngredients = function(){
    var ingredientsHtml = "";
    for (key in ingredients) {
       var unit = ingredients[key].unit;
       var quantity = ingredients[key].amount * model.getNumberOfGuests();
       var name = ingredients[key].name;

       totalIngredientCost = model.getMenuPrice(pricePerServing);

       var itemHtml = `
       <li class="ingredientItem col-sm-12">
           <div class="row">
               <div id="quantityAndUnit" class="col">${quantity} ${unit}</div>
               <div id="name" class="col">${name}</div>
           </div>
           <br>
       </li>`;

      ingredientsHtml += itemHtml;
    }
    return ingredientsHtml;
  }

  this.init = function() {

    model.getDish(foodId).then(data =>{
      var numberOfGuests = model.getNumberOfGuests();
      var selectedDishes = model.getFullMenu();

      var id = foodId;
      console.log(data);
      var imgSrc;
      if (!data.image) {
        imgSrc = "images/default.jpg";
      } else {
        imgSrc = data.image;
      }
      var foodName = data.title;
      var foodDesc = data.generatedText || "No description exists for this product.";
      var instructions = data.instructions;

      pricePerServing = data.pricePerServing;
      ingredients = data.extendedIngredients;
      var ingredientsHtml = getIngredients();

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
                                          <p class="text-right">USD <span id="totalIngredientCost">${totalIngredientCost}</span></p>
                                      </div>
                                  </div>

                              </div>

                          </div>
                      </div>
                  </div>
                  <div class="row">

                      <div class="container col-md-12 padTop">
                          <h3>Preparation</h3>
                          <p>${instructions}</p>
                      </div>

                  </div>`;

      this.container.html(html);
      refreshControllers();
    });

    this.container.html(`<h1 class="fas fa-pizza-slice fa-spin text-center"></h1>`);
  }

  // Display the view when rendered.
  this.init();

  this.update=function(model, changeDetails){
     // redraw just the portion affected by the changeDetails
     totalIngredientCost = 0;
     var ingredients = getIngredients();

     container.find("#ingredientList").html(ingredients);
     container.find("#numberOfGuests").text(model.getNumberOfGuests());
     container.find("#totalIngredientCost").text(Math.round(totalIngredientCost));
     refreshControllers();
	}
	model.addObserver(this.update);
}
