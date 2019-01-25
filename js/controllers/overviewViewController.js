//OverviewViewController Object constructor
var OverviewViewController = function(view, model ) {

  view.container.find("#backToSearch").click(function(){
    signal(this.id);
  });

  view.container.find("#printRecipe").click(function(){
    signal(this.id);
  });

}
