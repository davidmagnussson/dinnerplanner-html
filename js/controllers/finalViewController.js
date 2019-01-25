//FinalViewController Object constructor
var FinalViewController = function(view, model ) {

  view.container.find("#backToSearch").click(function(){
    signal(this.id);
  });

}
