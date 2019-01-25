//CartViewController Object constructor
var CartViewController = function(view, model ) {

  view.container.find("#confirm").click(function(){
    signal(this.id);
  });

}
