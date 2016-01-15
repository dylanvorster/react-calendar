var React = require("react");
var YearWidget = require("./YearWidget");
var ControlledMonthWidget = require("./ControlledMonthWidget");
var Toolkit = require("../Toolkit");
var _merge = require("lodash/merge");
/**
 * @author Dylan Vorster
 */
module.exports = React.createClass({
	displayName: "ControlledYearWidget",
	getDefaultProps: function(){
		return {
			monthSelected: function(month){
			},
			daySelected: function(date){
			},
			dayLoaded: function(date){
			},
			year: new Date().getFullYear()
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