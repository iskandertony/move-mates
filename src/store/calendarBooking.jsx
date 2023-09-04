import { makeAutoObservable } from "mobx";

class CalendarStore {
    dates = [];

    constructor() {
        makeAutoObservable(this);
    }

    addDate(date, startTime, endTime) {
        this.dates.push({
            date,
            startTime,
            endTime
        });
    }

    removeDate(date) {
        this.dates = this.dates.filter(d => d.date !== date);
    }

    getDate(date) {
        return this.dates.find(d => d.date === date);
    }
}

export default new CalendarStore();
