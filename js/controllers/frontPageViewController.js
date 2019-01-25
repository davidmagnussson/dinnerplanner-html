//FrontPageViewController Object constructor
var FrontPageViewController = function(view, model) {

 view.container.find("#createDinner").click(function(){
   signal(this.id);
 });

}
