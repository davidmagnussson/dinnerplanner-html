//FoodViewController Object constructor
var FoodViewController = function(view, model ) {

  view.container.find("#search").click(function(){
    refreshControllers();
    var filter = view.container.find("#filter").val();
    var type = view.container.find("#type").find(":selected").val();
    model.setShowDishes(type, filter);
  });

  view.container.find(".food-image").click(function(){
    signal(this.className, this.id);
  });

  view.container.find("#filterForm").submit(function(event){  // A function to prevent that we submit the form!
    refreshControllers();
    event.preventDefault();
  })
}
