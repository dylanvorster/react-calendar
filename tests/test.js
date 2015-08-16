var StormCalendar = require("../");
var React = require("react");
var div = React.createFactory('div');

window.onload = function(){
	React.render(StormCalendar.factories.ControlledWorkspaceWidget(),document.body);
};
