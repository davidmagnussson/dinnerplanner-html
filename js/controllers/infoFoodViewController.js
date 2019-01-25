//InfoFoodViewController Object constructor
var InfoFoodViewController = function(view, model ) {

  view.container.find("#backToSearch").click(()=>{
    signal(this.id);
  });

  view.container.find("#addToMenu").click(()=>{
    model.addDishToMenu(this.data("food-id"));
  });

}
