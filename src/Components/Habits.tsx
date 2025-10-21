import React, {useState, useEffect} from "react";
import Calendar from "./Calendar.tsx";
import type {CalendarEvent} from "../Interfaces/CalendarEvent.tsx";


 function Habits() {
    const [habitEvents, setHabitEvents] = useState<CalendarEvent[]>();
    useEffect(() => {
        const fetchData =
        const habitResponse = await fetch('/habits.json');
        const data = await habitResponse.json();
        console.log(data);
    }, []);


    return (
        <div className="w-full calendar-container">
            <h1>Habits page here!</h1>
            <Calendar events={habitEvents}></Calendar>
        </div>
    );
}

export default Habits;