var React = require("react");
/**
 * @author Dylan Vorster
 */
module.exports = {
	Toolkit: require("./modules/Toolkit"),
	factories: {
		
		//raw widgets
		DayWidget: React.createFactory(require("./modules/elements/DayWidget")),
		WeekWidget: React.createFactory(require("./modules/elements/WeekWidget")),
		MonthWidget: React.createFactory(require("./modules/elements/MonthWidget")),
		YearWidget: React.createFactory(require("./modules/elements/YearWidget")),
		
		//controlled widgets
		ControlledWorkspaceWidget: React.createFactory(require("./modules/elements/ControlledWorkspaceWidget")),
		ControlledMonthWidget: React.createFactory(require("./modules/elements/ControlledMonthWidget")),
		ControlledYearWidget: React.createFactory(require("./modules/elements/ControlledYearWidget"))
	},
};