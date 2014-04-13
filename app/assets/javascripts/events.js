# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$(document).ready(function(){

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    var calendar = $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay',
            ignoreTimezone: false
        },
        selectable: true,
        selectHelper: true,

        select: function(start, end, allDay)
                {
                   
                    var title = prompt('Event Title:');
                    if (title)
                    {
                        calendar.fullCalendar('renderEvent',
                            {
                                title: title,
                                start: start,
                                end: end,
                                allDay: allDay
                            },
                            true 
                        );
                    }
                    calendar.fullCalendar('unselect');
                },
                

        editable: true,
        events: 'events',
        defaultView: 'agendaWeek'
    });
});
