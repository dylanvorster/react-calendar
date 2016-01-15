var React = require("react");
var Toolkit = require("../Toolkit");
/**
 * @author Dylan Vorster
 */
module.exports = React.createClass({
	displayName: "MonthWidget",
	getDefaultProps: function(){
		return {
			startWeekOn: 0,
			weeks: [],
			micro: false
		};
	},
	render: function(){
		
		var weekDayNames = [];
		var currentDay = this.props.startWeekOn;
		for(var i = 0 ;i < 7;i++){
			var dow = Toolkit.getWeekDayName(currentDay);
			if(this.props.micro){
				dow = dow.charAt(0);
			}
			weekDayNames.push(React.DOM.div({key: i,className:'weekDay'},dow));
			currentDay++;
			if(currentDay > 6){
				currentDay = 0;
			}
		}
		
		return (
			React.DOM.div({className:'storm-calendar-month'},
				React.DOM.div({className:'weekDays'},weekDayNames),
				this.props.weeks
			)
		);
	}
});