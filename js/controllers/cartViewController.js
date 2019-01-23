//CartViewController Object constructor
var CartViewController = function(view, model ) {

 view.plusButton.click(function(){
 model.setNumberOfGuests(model.getNumberOfGuests() + 1);
 });

}
