//CartViewController Object constructor
var CartViewController = function(view, model ) {

  view.container.find("#confirm").click(function(){
    signal(this.id);
  });

  view.container.find("#number-of-people").change(function(){
    if (this.value > 0)
      model.setNumberOfGuests(this.value);
  });

  view.container.find("#number-of-people").click(function(){
    if (this.value > 0)
      model.setNumberOfGuests(this.value);
  });

}
