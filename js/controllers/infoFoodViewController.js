//InfoFoodViewController Object constructor
var InfoFoodViewController = function(view, model ) {

  view.container.find("#backToSearch").click(function(){
    signal(this.id);
  });

  view.container.find("#addToMenu").click(function(){
    var id = this.getAttribute("data-food-id");
    model.addDishToMenu(id);
  });

}
