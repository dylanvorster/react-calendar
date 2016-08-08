var React = require("react");
var _merge = require("lodash/merge");
/**
 * @author Dylan Vorster
 */
module.exports = React.createClass({
	displayName: "DayWidget",
	getDefaultProps: function(){
		return {
			ghost: false,
			date: new Date(),
			entries: [],
			micro: false,
			heading: null
		};
	},
	render: function(){
		var today = new Date();
		var isToday = false;
		if(today.toDateString() === this.props.date.toDateString()){
			isToday = true;
		}
		
		//if micro
		if(this.props.micro){
			return React.DOM.div(_merge({className:'storm-calendar-day '+(this.props.micro?'micro':'')+' '+(this.props.ghost?'ghost':'')+' '+(isToday?'today':'')},this.props),this.props.date.getDate());
		}
		
		return (
			React.DOM.div(_merge({className:'storm-calendar-day '+(this.props.ghost?'ghost':'')+' '+(isToday?'today':'')},this.props),
				React.DOM.div({className:'heading'},
					React.DOM.div({className:'title'},this.props.heading),
					React.DOM.div({className:'number'},this.props.date.getDate())
				),
				React.DOM.div({className:'content'},this.props.children)
			)
		);
	}
});