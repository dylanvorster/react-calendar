var React = require("react");
/**
 * @author Dylan Vorster
 */
module.exports = React.createClass({
	getDefaultProps: function(){
		return {
			entries: [
				{time: 1200,duration: 30}
			]
		};
	},
	render: function(){
		var timeslots = [];
		return (
			React.DOM.div({className:'storm-calendar-timesheet'})
		);
	}
});