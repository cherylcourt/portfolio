var schedule = [
	{
		"month": "December",
		"events": [	
			{ 
				"date": "Sunday, December 3, 2017",
				"location": "St. Joseph's Basilica",
				"time": "7:30 p.m."
			},
			{ 
				"date": "Monday, December 4, 2017",
				"location": "First Presbyterian Church",
				"time": "7:30 p.m."
			},
			{ 
				"date": "Friday, December 22, 2017",
				"location": "Winspear",
				"time": "8:00 p.m."
			},
			{ 
				"date": "Saturday, December 23, 2017",
				"location": "Winspear",
				"time": "2:00 p.m."
			},
			{ 
				"date": "Saturday, December 23, 2017",
				"location": "Winspear",
				"time": "8:00 p.m."
			}
		]
	},
	{
		"month": "January",
		"events": [
			{
				"date": "Friday, January 26, 2018",
				"location": "Westin Hotel",
				"time": "9:30 p.m."
			}
		]
	},
	{
		"month": "April",
		"events": [
			{
				"date": "Friday, April 13, 2018",
				"location": "All Saints Cathedral",
				"time": "8:00 p.m."
			}
		]
	}
];

var container = 
	'<div class="row">'+
		'<div class="col-xs-12">'+
    	'<h3 id="%month%" class="page-header">%month%</h3>'+ 
  	'</div>'+
	'</div>';

var row = '<div class="row">';
var eventPanel = 
		'<div class="col-sm-4">'+
			'<div class="panel panel-default">'+
				'<div class="panel-heading">' +
					'<h4 class="panel-title">%date%</h4>' +
					'</div><div class="panel-body"><div>%location%</div>' +
							'<div>%time%</div>' +
					'</div></div></div>';
var endRow = '</div>';


if(schedule.length > 0) {
	var entry;
	for(entry in schedule) {
		var month = schedule[entry].month;
		$('#schedule').append(container.replace("%month%", month).replace("%month%", month));
		// $('#schedule').append(row);
		var event;
		for(event in schedule[entry].events) {
			var eventDetails = schedule[entry].events[event];
			// $('#schedule').append(eventPanelStart);
			$('#schedule').append(
					eventPanel.replace("%date%", eventDetails.date)
										.replace("%location%", eventDetails.location)
										.replace("%time%", eventDetails.time));
			// $('#schedule').append(eventPanelEnd);
		}
		// $('#schedule').append(endRow);
	}
	
}
