//FoodViewController Object constructor
var FoodViewController = function(view, model ) {

  view.container.find("#search").click(function(){
    signal(this.id);
  });

}
