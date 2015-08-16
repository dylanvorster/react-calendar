var React = require("react");
var ControlledMonth = require("./ControlledMonthWidget");
var ControlledYear = require("./ControlledYearWidget");
var DayWidget = require("./DayWidget");
var Toolkit = require("../Toolkit");
/**
 * @author Dylan Vorster
 */
module.exports = React.createClass({
	getDefaultProps: function(){
		return {
			dayLoaded: function(date){
				console.log("Day Loaded: ".date);
			},
			state:'Year', 
			year: 2015,
			month: 1,
			week: 1,
			day: 1
		};
	},
	getInitialState: function(){
		return {
			state:this.props.state, 
			year: this.props.year,
			month: this.props.month,
			week: this.props.week,
			day: this.props.day
		};
	},
	loadDate: function(date){
		this.state.year = date.getFullYear();
		this.state.month = date.getMonth()+1;
		this.state.day = date.getDate();
		this.setState(this.state);
	},
	goToday: function(){
		this.loadDate(new Date());
	},
	goForward: function(){
		if(this.state.state === 'Year'){
			this.state.year++;
		}
		else if(this.state.state === 'Month'){
			var ob = Toolkit.getNextMonth(this.state.year,this.state.month);
			this.state.year = ob.year;
			this.state.month = ob.month;
		}
		else if(this.state.state === 'Week'){
			
		}
		else if(this.state.state === 'Day'){
		}
		this.setState(this.state);
	},
	goBackward: function(){
		if(this.state.state === 'Year'){
			this.state.year--;
		}
		else if(this.state.state === 'Month'){
			var ob = Toolkit.getPreviousMonth(this.state.year,this.state.month);
			this.state.year = ob.year;
			this.state.month = ob.month;
		}
		else if(this.state.state === 'Week'){
		}
		else if(this.state.state === 'Day'){
		}
		this.setState(this.state);
	},
	daySelected: function(date){
		this.state.state = 'Day';
		this.loadDate(date);
	},
	render: function(){
		
		var buttons = ['Year','Month','Week','Day'];
		
		var content = null;
		var heading = null;
		
		//load the content
		if(this.state.state === 'Year'){
			content = React.createElement(ControlledYear,{
				year: this.state.year,
				dayLoaded:this.props.dayLoaded,
				daySelected: this.daySelected,
				monthSelected: function(month){
					this.state.month = month;
					this.state.state = 'Month';
					this.setState(this.state);
				}.bind(this)
			});
			heading = this.state.year;
		}
		else if(this.state.state === 'Month'){
			content = React.createElement(ControlledMonth,{
				year: this.state.year,
				month: this.state.month,
				dayLoaded:this.props.dayLoaded,
				daySelected: this.daySelected
			});
			heading = this.state.year+" "+Toolkit.getMonthName(this.state.month);
		}
		else if(this.state.state === 'Week'){
			content = React.createElement(ControlledMonth,{
				year: this.state.year,
				month: this.state.month,
				week:1,dayLoaded:this.props.dayLoaded,
				daySelected: this.daySelected
			});
			heading = this.state.year+" "+Toolkit.getMonthName(this.state.month)+": week "+this.state.week;
		}
		else if(this.state.state === 'Day'){
			var date = new Date(this.state.year,this.state.month-1,this.state.day);
			content = React.createElement(DayWidget,{date: date},this.props.dayLoaded(date));
			heading = this.state.year+" "+Toolkit.getMonthName(this.state.month)+" "+this.state.day;
		}
		
		return (
			React.DOM.div({className:'storm-calendar-workspace'},
				React.DOM.div({className:'menubar'},
					React.DOM.div({className:'heading'},heading),
					React.DOM.div({className:'buttons'},
						buttons.map(function(key){
							return React.DOM.div({className:'button',onClick: function(){
								this.state.state = key;
								this.setState(this.state);
							}.bind(this)},key);
						}.bind(this))
					),
					React.DOM.div({className:'switcher'},
						React.DOM.div({className:'fa fa-arrow-left',onClick:this.goBackward}),
						React.DOM.div({className:'today',onClick: this.goToday},'Today'),
						React.DOM.div({className:'fa fa-arrow-right',onClick:this.goForward})
					)
				),
				React.DOM.div({className:'content'},content)
			)
		);
	}
});