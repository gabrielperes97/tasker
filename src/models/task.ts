import { v4 as uuidv4 } from 'uuid';

export default class Task {
    readonly id: string;
    readonly description: string;

    constructor(description: string) {
        this.description = description;
        this.id = uuidv4();
    }
};