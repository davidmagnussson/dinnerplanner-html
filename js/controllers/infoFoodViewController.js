//InfoFoodViewController Object constructor
var InfoFoodViewController = function(view, model ) {

  view.container.find("#backToSearch").click(function(){
    signal(this.id);
  });

  view.container.find("#addToMenu").click(function(){
    model.addDishToMenu(this.data("food-id"));
  });

}
