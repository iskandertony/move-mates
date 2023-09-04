import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
const CalendarTime = (props) => {
  const [activeTimeSlot, setActiveTimeSlot] = useState(null);
  const [selectedSlots, setSelectedSlots] = useState(null);
  const { handleSave } = props;
  const getTimeSlots = () => {
    let slots = [];
    for (let i = 9; i <= 19; i++) {
      slots.push(`${i}:00`);
    }
    return slots;
  };
  const timeSlotRefs = useRef(getTimeSlots().map(() => React.createRef()));

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        timeSlotRefs.current.every(
          (ref) => !ref.current?.contains(event.target)
        )
      ) {
        setActiveTimeSlot(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div>
      <div className={"name"}>Доступное время</div>
      <div className="time-slots-container mt-10">
        {getTimeSlots().map((time, index) => (
          <div
            key={index}
            ref={timeSlotRefs.current[index]}
            className={`time-slot-card ${
              activeTimeSlot === time
                ? "selected"
                : selectedSlots?.time === time
                ? "selected"
                : ""
            }`}
            onClick={() => {
              setActiveTimeSlot(time);
            }}
          >
            {time}
            {activeTimeSlot === time && (
              <div className="duration-options">
                <button
                  className={`${
                    selectedSlots?.time === time &&
                    selectedSlots?.duration === 60
                      ? "selected"
                      : ""
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSlots({
                      time: time,
                      duration: 60,
                    });
                    setActiveTimeSlot(null);
                  }}
                >
                  60 minutes
                </button>
                <button
                  className={`${
                    selectedSlots?.time === time &&
                    selectedSlots?.duration === 90
                      ? "selected"
                      : ""
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSlots({
                      time: time,
                      duration: 90,
                    });
                    setActiveTimeSlot(null);
                  }}
                >
                  90 minutes
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          if (activeTimeSlot) {
            handleSave(null, activeTimeSlot);
          }
        }}
      >
        Сохранить время
      </button>
    </div>
  );
};

export default CalendarTime;
