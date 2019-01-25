//CartViewController Object constructor
var CartViewController = function(view, model ) {

  view.container.find("#confirm").click(function(){
    signal(this.id);
  });

  view.container.find("#number-of-people").change(function(){
    model.setNumberOfGuests(this.value);
  });

  view.container.find("#number-of-people").click(function(){
    model.setNumberOfGuests(this.value);
  });

}
