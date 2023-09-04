import React from 'react';
import Names from "../../../components/names";
import CalendarReservation from "../../../components/calendar-reservation";

const Reservation = () => {
    return (
        <div className={"container_mobile back_ground"}>
            <Names title={"Назад"} name={"Бронь наперед"} />
            <CalendarReservation/>
        </div>
    );
};

export default Reservation;
