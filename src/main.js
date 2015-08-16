var React = require("react");
/**
 * @author Dylan Vorster
 */
module.exports = {
	Toolkit: require("./modules/Toolkit"),
	factories: {
		DayEntryWidget: React.createFactory(require("./modules/elements/DayEntryWidget")),
		DayWidget: React.createFactory(require("./modules/elements/DayWidget")),
		MonthWidget: React.createFactory(require("./modules/elements/MonthWidget")),
		WeekWidget: React.createFactory(require("./modules/elements/WeekWidget")),
		YearWidget: React.createFactory(require("./modules/elements/YearWidget")),
		
		
		ControlledWorkspaceWidget: React.createFactory(require("./modules/elements/ControlledWorkspaceWidget")),
		ControlledMonthWidget: React.createFactory(require("./modules/elements/ControlledMonthWidget")),
		ControlledYearWidget: React.createFactory(require("./modules/elements/ControlledYearWidget"))
	},
};