//FoodViewController Object constructor
var FoodViewController = function(view, model ) {

  view.container.find("#search").click(function(){
    var filter = view.container.find("#filter").val();  //Får man använda sig av jquery funktioner? .text fungerade ej men detta fungerar
    var type = view.container.find("#type").find(":selected").text();  // Även detta är jquery, häääällllooooh
    // alert(filter.length+" "+type.length);
    // console.log(filter);
    
    // model.setShowDishes(type, filter);  //Detta fungerar inte då att jag inte lyckas hämta this.getAllDishes() i dinnermodel.
    signal(this.id);// TODO: REMOVE - this is just for demonstration.
  });

  view.container.find(".food-image").click(function(){
    signal(this.className, this.id);
  });

}
