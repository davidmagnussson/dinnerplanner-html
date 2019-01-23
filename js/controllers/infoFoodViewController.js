//InfoFoodViewController Object constructor
var InfoFoodViewController = function(view, model ) {

 view.plusButton.click(function(){
 model.setNumberOfGuests(model.getNumberOfGuests() + 1);
 });

}
