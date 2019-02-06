//DinnerModel Object constructor
var DinnerModel = function() {

  const API_KEY = "3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767";
  var observers=[];
  var selectedDishes=[];

  this.errorMsg = function (error){
    console.error("Error: ", error);
    if (error) {
      console.log("Something went wrong");
    }
  }

  this.addObserver=function(observerFunc){ observers.push(observerFunc); }

  this.notifyObservers=function(details){
      for(key in observers) {
           observers[key](this, details); // we will make sure that observers[i] is a function, so we can call it like observers[i](parameters)
      }
  }

  this.removeObserver=function(i){
    delete observers[i];
  }

  this.deleteObservers=function(){
    for (key in observers) {
      this.removeObserver(key);
    }
  }

  var numberOfGuests = 3;
  var selectedDishes = [];
  var showDishes = [];

  this.setShowDishes = function(type, filter){
    showDishes = this.getAllDishes(type, filter);
    this.notifyObservers();
  }

  this.getShowDishes = function(){
    return showDishes;
  }

	this.setNumberOfGuests = function(num) {
		numberOfGuests = num;
    this.notifyObservers();
	}

	this.getNumberOfGuests = function() {
		return numberOfGuests;
	}

	//Returns the dish that is on the menu for selected type
	this.getSelectedDish = function(type) {
    var allSelDishes = [];
    for(key in selectedDishes){
      if(selectedDishes[key].type == type) {
         allSelDishes.push(selectedDishes[key]);
      }
    }
    return allSelDishes;
	}

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		return selectedDishes;
	}

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		var allIngredients = [];
    for(key in selectedDishes){
      for (keyIn in selectedDishes[key].extendedIngredients) {
        var ingredient = selectedDishes[key].extendedIngredients[keyIn];
        allIngredients.push(ingredient);
      }
    }
    return allIngredients;
	}

  //Returns the price of a menu item (all the ingredients for this dish multiplied by number of guests).
  this.getMenuPrice = function(price) {
    return Math.round(price * this.getNumberOfGuests());
  }

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
    var sum = 0;
    for(key in selectedDishes){
      sum += selectedDishes[key].pricePerServing;
    }
    return Math.round(sum * this.getNumberOfGuests());
	}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(id) {
    this.getDish(id).then(data => {
      for(key in selectedDishes){
        let selDishesTypes = selectedDishes[key].dishTypes;
        let currDishTypes = data.dishTypes;
        // Checks all dishTypes for this dish on the menu and sees if it matches
        // any of the dishTypes of the dish we want to add!
        let found = selDishesTypes.some(r=> currDishTypes.indexOf(r) >= 0);
        if (found) {
          this.removeDishFromMenu(selectedDishes[key].id);
        }
      }
      selectedDishes.push(data);
      this.notifyObservers();
    }).catch(error => this.errorMsg(error));
	}

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
    for(key in selectedDishes){
      if (selectedDishes[key].id == id) {
        delete selectedDishes[key];
      }
    }
	}

	this.getAllDishes = function (type,filter) {
    let url = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?query="+type+" "+filter;
    return fetch(url,{ headers:{ 'X-Mashape-Key': API_KEY }}).then(response => response.json()).then(data => data.results);
	}

	//function that returns a dish of specific ID
	this.getDish = function (id) {
    let url = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/"+id+"/information";
    return fetch(url,{ headers:{ 'X-Mashape-Key': API_KEY }}).then(response => response.json());
  }

  showDishes = this.getAllDishes('main course', '');
}
