var React = require("react");
var YearWidget = require("./YearWidget");
var ControlledMonthWidget = require("./ControlledMonthWidget");
var Toolkit = require("../Toolkit");
var _merge = require("lodash/object/merge");
/**
 * @author Dylan Vorster
 */
module.exports = React.createClass({
	getDefaultProps: function(){
		return {
			monthSelected: function(month){
				console.log("Month Clicked: ",month);
			},
			daySelected: function(date){
				console.log("Date Selected: ",date);
			},
			dayLoaded: function(date){
				console.log("Day Loaded: ",date);
			},
			year: 2015
		};
	},
	render: function(){
		var months = {};
		for(var i = 1;i <= 12;i++){
			months[Toolkit.getMonthName(i)] = React.createElement(ControlledMonthWidget,_merge({
				micro: true,
				month:i
			},this.props));
		}
		return (
			React.createElement(YearWidget,{months: months,monthSelected: this.props.monthSelected})
		);
	}
});