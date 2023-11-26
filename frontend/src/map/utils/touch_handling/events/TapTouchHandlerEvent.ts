import {TouchHandlerEvent} from "./TouchHandlerEvent";

export class TapTouchHandlerEvent extends TouchHandlerEvent {
    static TYPE = "tap";

    x0: number;
    y0: number;
    duration: number; //ms

    constructor(x0: number, y0: number, duration: number) {
        super(TapTouchHandlerEvent.TYPE);

        this.x0 = x0;
        this.y0 = y0;
        this.duration = duration;
    }
}
