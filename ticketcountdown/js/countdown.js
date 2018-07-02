var day = new Date();
var dayNames = new Array ("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var today = dayNames[day.getDay()];
var hours = day.getHours();
var minutes = day.getMinutes();
var time_periods = [];

switch (today) {

	case "Tuesday": return; // Do nothing on Tuesdays, exit immediately.

	default: // Can add per-day cases if we need different countdown patterns for each day.

		time_periods = [
		   { start_time: "0", end_time: "7", end_mins: "59", start_qty: 2000, end_qty: 1700 },

		   { start_time: "8", end_time: "21", end_mins: "59", start_qty: 1700, end_qty: 20 },

		   { start_time: "22", end_time: "23", end_mins: "59", start_qty: 20, end_qty: 20 },
	          ];
	break;
}

for(var i = 0; i < time_periods.length; i++){
if(hours >= time_periods[i].start_time && hours <= time_periods[i].end_time && minutes <= time_periods[i].end_mins ){
if(time_periods[i].start_time == 0){
// 8 hours between 12 midnight and 8am.
var mins_in_period = 8 * 60; 
}else{
var mins_in_period = 14 * 60; 
}
var tickets_to_reduce = time_periods[i].start_qty - time_periods[i].end_qty;
// Work out how many tickets to reduce each minute:
var reduce_per_minute = tickets_to_reduce / mins_in_period;

// Work out how far into the current time period we are right now.
var step_start_hour = time_periods[i].start_time;
var hours_in = hours - step_start_hour; // eg. 2 hours into current time period (120 minutes).
var minutes_in = (hours_in * 60) + minutes; //  At 10:05 we'll be 125 minutes into the time period.

// Calculate remaining tickets:
var remaining_tickets = Math.ceil(time_periods[i].start_qty - (minutes_in * reduce_per_minute));
$(".ticket-countdown").html("Hurry only " + remaining_tickets + " of " + time_periods[0].start_qty + " tickets today");

}
}

