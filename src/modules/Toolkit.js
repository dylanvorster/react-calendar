/**
 * @author Dylan Vorster
 */
module.exports = {
	daysInMonth: function(year,month) {
		return new Date(year, month, 0).getDate();
	},
	getNextMonth: function(year,month){
		var ob = {year: year,month: month+1};
		if(ob.month === 13){
			ob.month = 1;
			ob.year = ob.year+1;
		}
		return ob;
	},
	getPreviousMonth: function(year,month){
		var ob = {year: year,month: month-1};
		if(ob.month === 0){
			ob.month = 12;
			ob.year = ob.year-1;
		}
		return ob;
	},
	
	/**
	 * Get the name of the month month = 1-12
	 * @param {type} month
	 * @returns {Array}
	 */
	getMonthName: function(month){
		return ([
			'January','February','March','April','May','June',
			'July','August','September','October','November','December'])[month-1];
	},
	/**
	 * Returns the day of the week as a name, 0 = sunday etc..
	 * @param {type} weekDay
	 * @returns {Array}
	 */
	getWeekDayName: function(weekDay){
		return ([
			'Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'
		])[weekDay];
	}
};