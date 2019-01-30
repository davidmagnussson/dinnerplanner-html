var CartView = function (container, model) {

  this.container = container;

  var getItemHtml = function(foodId,foodName,foodCost) {
    var fill = `<div class="cart-item row text-center">
        <p class="foodName text-left col" id="${foodId}">${foodName}</p>
        <p class="foodCostElement text-right" id="${foodId}">${foodCost}</p>
        </div>`;
    return fill;
  }

  var getItems = function(selectedDishes) {
    items = "";
    for(key in selectedDishes){
      var foodName = selectedDishes[key].name;
      var foodId = selectedDishes[key].id;
      var foodCost = model.getMenuPrice(foodId);
      var fill = getItemHtml(foodId, foodName, foodCost);
      items+=fill;
    }
    return items;
  }

  this.init = function(){
    var guests = model.getNumberOfGuests();
    var selectedDishes = model.getFullMenu();
    var menuPrice = model.getTotalMenuPrice();
    var items = getItems(selectedDishes);

    var html =`
    <div id="header-in-cart" class="row">
        <div class="col">
            <strong>My Dinner</strong>
        </div>
        <div class="d-block d-md-none">
            <strong><span class="total_cost">SEK ${menuPrice}</span></strong>
            <button data-toggle="collapse" data-target="#on-mobile-collapse" type="button" id="menu-button" id="menu-button">
                <i class="fas fa-bars"></i>
            </button>
        </div>
    </div>
    <div class="show collapse d-lg-block d-md-block" id="on-mobile-collapse">
        <br/>
        <form id="num-people-form" action="#">
            <div class="form-group row">
                <label for="number-of-people" class="col">People</label>
                <input class="form-control col" type="number" value="${guests}" min="1" id="number-of-people"/>
            </div>
        </form>
        <div id="cart-description" class="row">
            <div class="col-md-12 col-lg-12 col-sm-12 row">
                <p class="text-left col">Dish Name</p>
                <p class="text-right">Cost</p>
            </div>
        </div>

        <div id="items" class="container-fluid"> <!--Detta är det som skiljer prototypbild 2 och 4-->
          ${items}
        </div>

        <div id="menu-list container-fluid">
            <p class="text-right">SEK <span class="total_cost">${menuPrice}</span></p>
            <div class="text-center">
                <button id="confirm">Confirm Order</button>
            </div><br/>
        </div>
    </div>`;

    this.container.html(html);
  }

  // Display the view when rendered.
  this.init();

  this.update=function(model, changeDetails){

     // redraw just the portion affected by the changeDetails
     var selectedDishes = model.getFullMenu();
     var items = getItems(selectedDishes);
     container.find("#items").html(items);

     container.find(".total_cost").text(model.getTotalMenuPrice());
	}
	model.addObserver(this.update);
}
