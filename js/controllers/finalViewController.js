//FinalViewController Object constructor
var FinalViewController = function(view, model ) {

 view.plusButton.click(function(){
 model.setNumberOfGuests(model.getNumberOfGuests() + 1);
 });

}
