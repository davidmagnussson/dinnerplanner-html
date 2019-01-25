//OverviewViewController Object constructor
var OverviewViewController = function(view, model ) {

  view.container.find("#backToSearch").click(()=>{
    signal(this.id);
  });

  view.container.find("#printRecipe").click(()=>{
    signal(this.id);
  });

}
