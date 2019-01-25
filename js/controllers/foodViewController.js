//FoodViewController Object constructor
var FoodViewController = function(view, model ) {

  view.container.find("#search").click(function(){
    signal(this.id);// TODO: REMOVE - this is just for demonstration.
  });

  view.container.find(".food-image").click(function(){
    signal(this.className, this.id);
  });

}
