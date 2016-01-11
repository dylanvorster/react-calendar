var React = require("react");
/**
 * @author Dylan Vorster
 */
module.exports = React.createClass({
	
	getDefaultProps:function(){
		return {
			monthSelected: function(month){
			},
			months: {}
		};
	},
	render: function(){
		return (
			React.DOM.div({className:'storm-calendar-year'},
				Object.keys(this.props.months).map(function(key){
					return React.DOM.div({className:'yearmonth'},
						React.DOM.div({className:'title',onClick: function(){
							this.props.monthSelected(this.props.months[key].props.month);
						}.bind(this)},key),
						this.props.months[key]
					);
				}.bind(this))
			)
		);
	}
});