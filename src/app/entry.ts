import { Time } from "@angular/common";

export class Entry {

    constructor(
        public id?: number,
        public value?: number,
        public description?: string,
        public date?: any,
        public time?: any
    ){}
    
}
