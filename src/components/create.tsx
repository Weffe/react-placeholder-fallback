import * as React from 'react'
import { TimerManager } from './TimerManager'

export interface IOptions {
    /** The amount of time (ms) that is waited before showing the placeholder */
    delay: number;
    /** The amount of time (ms) that is waited before showing the fallback */
    timeout: number;
    /** The fallback to display when the timeout expires */
    fallback: React.ReactNode;
}

const defaultOptions: IOptions = {
    delay: 0, // no delay
    timeout: 1000 * 15, // 15 sec timeout
    fallback: <p>Oh no! There was a network error. Please try again.</p>
}

export interface IPlaceholderFallbackProps extends Partial<IOptions> {
    /** The placeholder to display while the timeout has not expired*/
    placeholder: React.ReactNode;
}

export interface IPlaceholderFallbackState {
    showPlaceholder: boolean;
    showFallback: boolean;
}

export const create = (options?: Partial<IOptions>) => {
    const mergedOptions = { ...defaultOptions, ...options };

    return (
        class ConfiguredPlaceholderFallback extends React.Component<IPlaceholderFallbackProps, IPlaceholderFallbackState>{
            public timerManager: TimerManager;
            public readonly state: IPlaceholderFallbackState;

            public constructor(props: IPlaceholderFallbackProps) {
                super(props);

                const timeout = this.props.timeout || mergedOptions.timeout;
                const delay = this.props.delay || mergedOptions.delay;

                this.timerManager = new TimerManager(timeout, delay);

                this.state = {
                    showPlaceholder: false,
                    showFallback: false
                }
            }

            public async componentDidMount() {
                const delay = this.props.delay || mergedOptions.delay;

                if (delay !== 0) {
                    await this.timerManager.startDelayTimeout();
                    this.onlyShowPlaceholder();

                    await this.timerManager.startNetworkTimeout();
                    this.onlyShowFallback();
                }
                else {
                    this.onlyShowPlaceholder();

                    await this.timerManager.startNetworkTimeout();
                    this.onlyShowFallback();
                }
            }

            public componentWillUnmount() {
                this.timerManager.clearTimeout();
            }

            public onlyShowPlaceholder = () => {
                this.setState(() => ({ showPlaceholder: true, showFallback: false }));
            }

            public onlyShowFallback = () => {
                this.setState(() => ({ showPlaceholder: false, showFallback: true }));
            }

            public render() {
                const { showFallback, showPlaceholder } = this.state;
                const fallback = this.props.fallback || mergedOptions.fallback;

                if (showPlaceholder) {
                    /**
                     * I assign the react placeholder to a capitalized var
                     * because its a JSX required rule.
                     * @see https://reactjs.org/docs/jsx-in-depth.html#choosing-the-type-at-runtime
                     */
                    const Placeholder = this.props.placeholder;

                    if (typeof Placeholder === 'function') {
                        return <Placeholder />
                    }

                    return Placeholder;
                }
                else if (showFallback) {
                    const Fallback = fallback;

                    if (typeof Fallback === 'function') {
                        return <Fallback />
                    }

                    return Fallback;
                }

                return null;
            }
        }
    )
}
