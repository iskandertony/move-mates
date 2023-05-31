import React, { useEffect, useRef } from 'react';
import { format, startOfWeek, startOfMonth, endOfMonth, eachDayOfInterval, isToday } from 'date-fns';
import moment from "moment"
import "./style.scss"

function CalendarWeek(props) {
    const {onDayClick ,selectedDate} = props
    const start = startOfWeek(startOfMonth(new Date()), { weekStartsOn: 1 });
    const end = endOfMonth(new Date());

    const month = eachDayOfInterval({ start, end });

    const todayRef = useRef();

    useEffect(() => {
        if(todayRef.current) {
            setTimeout(() => {
                todayRef.current.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
            }, 0);
        }
    }, []);


    return (
        <div className="calendar">
            {month.map((day, index) => (
                <div
                    key={index}
                    className={`calendar-day ${isToday(day) ? 'today' : ''}
                    ${selectedDate === format(day, 'yyyy-MM-dd') && !isToday(day) ? 'selected' : ''}
                    `}
                    onClick={() => onDayClick(moment(day).format('YYYY-MM-DD'))}
                    ref={isToday(day) ? todayRef : null}
                >
                    <div className="calendar-day-number">
                        {format(day, 'd')}
                    </div>
                    <div className="calendar-day-name">
                        {format(day, 'EEE')}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CalendarWeek;
