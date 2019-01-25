//FinalViewController Object constructor
var FinalViewController = function(view, model ) {

  view.container.find("#backToSearch").click(()=>{
    signal(this.id);
  });

}
