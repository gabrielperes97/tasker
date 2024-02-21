import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

export default class Task {
    readonly id: string;
    readonly description: string;
    datetimeTaskActivate?: Date;
    secondsSpend: number = 0;
    active: boolean = false;

    constructor(description: string) {
        this.description = description;
        this.id = uuidv4();
    }


    public activateTask() {
        this.datetimeTaskActivate = new Date()
        this.active = true;
        return this.datetimeTaskActivate;
    }

    public disableTask() {
        if (this.datetimeTaskActivate) {
            this.active = false;
            this.secondsSpend += moment().diff(this.datetimeTaskActivate, 'seconds')
            this.datetimeTaskActivate = undefined;
        }        
    }

    public calculateActualTimeSpend(): string {
        if (this.datetimeTaskActivate) {
            let actual = moment().diff(this.datetimeTaskActivate)
            return moment.utc(actual).format("HH:mm:ss")
        }
        return "00:00:00";
    }

    public calculateTotalTimeSpend(): string {
        if (this.datetimeTaskActivate && this.active) {
            let actual = moment().diff(this.datetimeTaskActivate);
            let total = moment.duration(actual).add(this.secondsSpend, 'seconds').asMilliseconds();
            return moment.utc(total).format("HH:mm:ss");
        }
        return moment.utc(this.secondsSpend*1000).format("HH:mm:ss");
    }
};