// import React from "react";
// import moment from "moment";
// const CalendaryDayEvent = (props) => {
//   const { name, date } = props;
//   const isToday = moment().isSame(date, "day");
//   return (
//       <div style={{ color: isToday ? "purple" : "black" }}>
//         {moment(date).date()}
//       </div>
//   );
// };
//
// export default CalendaryDayEvent;

import React from 'react';
import moment from 'moment';

const CalendarDayEvent = ({ date, children }) => {
    const isToday = moment().isSame(date, 'day');
    const backgroundColor = isToday ? 'purple' : 'inherit';

    return (
        <div style={{ padding: '5px', backgroundColor }}>
            {children}
        </div>
    );
};

export default CalendarDayEvent;

