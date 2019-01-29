var FrontPageView = function (container, model) {

  this.container = container;

  this.init = function() {

    var content =
    `<div class="row text-center justify-content-center">
        <div class="col-md-6" id="site-information">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <button type="button" id="createDinner">Create new dinner</button>
        </div>
    </div>`;

    this.container.html(content);

  }

  // Display the view when rendered.
  this.init();

  this.update=function(model, changeDetails){
     this.init();
	}
	model.addObserver(this.update);
}
