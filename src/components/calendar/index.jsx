import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

// Необходимо для корректной работы с библиотекой moment
import 'moment/locale/ru';

// Необходимо для стилей календаря
import 'react-big-calendar/lib/css/react-big-calendar.css';
import "./style.scss"
// Создаем экземпляр локализатора
const localizer = momentLocalizer(moment);

// Пример событий для календаря
const events = [
    {
        title: 'День рождения',
        start: moment().toDate(),
        end: moment().add(1, 'days').toDate(),
        allDay: true,
    },
    {
        title: 'Встреча',
        start: moment().add(2, 'days').toDate(),
        end: moment().add(2, 'days').add(1, 'hours').toDate(),
        allDay: false,
    },
];

const MyCalendar = () => (
    <div style={{ height: 700 }}>
        <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500, margin: '50px' }}
        />
    </div>
);

export default MyCalendar;
