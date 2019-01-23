//FoodViewController Object constructor
var FoodViewController = function(view, model ) {

 view.plusButton.click(function(){
 model.setNumberOfGuests(model.getNumberOfGuests() + 1);
 });

}
