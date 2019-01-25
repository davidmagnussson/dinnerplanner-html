/** ExampleView Object constructor
 *
 * This object represents the code for one specific view (in this case the Example view).
 *
 * It is responsible for:
 * - constructing the view (e.g. if you need to create some HTML elements procedurally)
 * - populating the view with the data
 * - updating the view when the data changes
 *
 * You should create a view Object like this for every view in your UI.
 *
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model
 */
var PartialPageView = function (container, model) {

	this.container = container;

	var html =
        `<div class="row">
            <div class="col-lg-3 col-md-3" id="cart">
              <!-- CART -->
            </div>
            <div  class="col-lg-9 col-md-9 container-fluid" id="site-content">
            </div>
          </div>`;

  this.container.html(html);

}
