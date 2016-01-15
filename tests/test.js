var StormCalendar = require("../");
var ReactDom = require("react-dom");

require("./test.scss");

window.onload = function(){
	ReactDom.render(StormCalendar.factories.ControlledWorkspaceWidget(),document.body);
};
