import React from 'react';
import timeGridPlugin from "@fullcalendar/timegrid";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import type {DateClickArg} from '@fullcalendar/interaction';
import type {CalendarEvent} from "../Interfaces/CalendarEvent.tsx";




export default function Calendar(props: any) {
console.log(props, 'props');
    const events = props.events.map( p => {
    p.url = `/${p.context}/${p.id}`;
        return p;
    })

    const handleDateClick = (arg: DateClickArg) => {
        console.log(arg, 'arg passed in')
        alert(arg.dateStr);
    }

    return (
        <div className="calendar-container">


            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                    start: 'dayGridMonth,timeGridWeek,timeGridDay custom1',
                    center: 'title',
                    end: 'custom2 prevYear,prev,next,nextYear'
                }}
                dateClick={handleDateClick}
                weekends={false}
                events={events}
            />
        </div>

    );
}
