export class TimerManager {
    private timeoutID?: number;
    public timeout: number;
    public delay: number

    constructor(timeout: number, delay: number) {
        this.timeout = timeout;
        this.delay = delay;
    }

    public startNetworkTimeout = (): Promise<{}> => {
        return new Promise((resolve) => {
            this.timeoutID = window.setTimeout(() => {
                resolve();
            }, this.timeout)
        })
    }

    public startDelayTimeout = (): Promise<{}> => {
        return new Promise((resolve) => {
            this.timeoutID = window.setTimeout(() => {
                resolve();
            }, this.delay)
        })
    }

    public clearTimeout = () => {
        if (this.timeoutID) {
            window.clearTimeout(this.timeoutID);
        }
    }
}
