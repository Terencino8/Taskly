import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
const localizer = momentLocalizer(moment);
const myEventsList = [
  { start: new Date(), end: new Date(), title: "Terence Event" }
];



// 
const CalenderComponent = (props) => {
  return (
    <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
      />
  )
}

export default CalenderComponent