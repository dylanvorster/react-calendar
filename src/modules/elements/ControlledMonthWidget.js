var React = require("react");
var DayWidget = require("./DayWidget");
var WeekWidget = require("./WeekWidget");
var MonthWidget = require("./MonthWidget");
var Toolkit = require("../Toolkit");
var _merge = require("lodash/merge");
/**
 * @author Dylan Vorster
 */
module.exports = React.createClass({
	displayName: "ControlledMonthWidget",
	getDefaultProps: function(){
		return {
			daySelected: function(date){
			},
			dayLoaded: function(date){
			},
			getDayProps: function(date){
				return {};
			},
			startWeekOn: 0,
			month: (new Date()).getMonth()+1,
			year: new Date().getFullYear(),
			week: null,
			micro: false
		};
	},
	generateDay: function(date,ghost){
		var props = this.props.getDayProps(date,this.props);
		props.key = date.getDate();
		props.onClick = function(){
			this.props.daySelected(date,this.props);
		}.bind(this);
		props.date = date;
		props.ghost = ghost;
		props.micro = this.props.micro;
		
		return React.createElement(DayWidget,props,this.props.dayLoaded(date));
	},
	render: function(){
		
		//get days in month
		var daysInMonth = Toolkit.daysInMonth(this.props.year,this.props.month);
		var startingDayOfWeek = new Date(this.props.year,this.props.month-1,1).getDay(); //sunday is zero
		var currentWeekDays = [];
		
		//we dont need to show the previous month
		if(startingDayOfWeek !== this.props.startWeekOn){
			
			var previousMonthObject = Toolkit.getPreviousMonth(this.props.year,this.props.month);
			var previousMonthDays = Toolkit.daysInMonth(previousMonthObject.year,previousMonthObject.month);
			
			var outBy = startingDayOfWeek - this.props.startWeekOn;
			for(var i = 0;i < outBy;i++){
				var date = new Date(previousMonthObject.year, previousMonthObject.month-1, previousMonthDays-outBy+i+1);
				currentWeekDays.push(this.generateDay(date,true));
			}
		}
		
		var weeks = [];
		
		//create a date for each day
		for(var i = 1;i <= daysInMonth;i++){
			
			//push to the stack
			if(currentWeekDays.length === 7){
				weeks.push(React.createElement(WeekWidget,{key:i,days:currentWeekDays}));
				currentWeekDays = [];
			}
			var date = new Date(this.props.year, this.props.month-1, i);
			currentWeekDays.push(this.generateDay(date,false));
		}
		
		//do a final push if there are days left and generate the days of the next month
		if(currentWeekDays.length > 0){
			var nextMonthObject = Toolkit.getNextMonth(this.props.year,this.props.month);
			
			var size = 7-currentWeekDays.length;
			
			for(var i = 1;i <= size;i++){
				var date = new Date(nextMonthObject.year, nextMonthObject.month-1, i);
				currentWeekDays.push(this.generateDay(date,true));
			}
			
			weeks.push(React.createElement(WeekWidget,{key:'last',days:currentWeekDays}));
		}
		
		//are we filtering weeks
		if(this.props.week){
			weeks = [weeks[this.props.week-1]];
		}
		
		
		return (
			React.createElement(MonthWidget,_merge({weeks: weeks},this.props))
		);
	}
});