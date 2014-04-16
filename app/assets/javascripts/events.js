
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
                        
                        $.post("data/event", {title: title, start: start, end: end});
                    }
                    calendar.fullCalendar('unselect');
                },
                

        editable: true,
        events: 'events',
        defaultView: 'agendaWeek'
    });
    $("#events > div").each(function(index) {
        var start = $(this).find(".start").text();
        var end = $(this).find(".end").text();
        var title = $(this).find(".title").text();
        calendar.fullCalendar('renderEvent',
            {
                title: title,
                start: start,
                end: end
            },
            true 
        );
    });
});
