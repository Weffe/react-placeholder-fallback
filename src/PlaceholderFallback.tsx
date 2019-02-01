import * as React from 'react';

export interface IPlaceholderFallbackProps {
    /** The amount of time (ms) that is waited before showing the placeholder */
    delay?: number;
    /** The amount of time (ms) that is waited before showing the fallback */
    timeout?: number;
    /** The fallback to display when the timeout expires */
    fallback?: React.ComponentType<any>;
    /** The placeholder to display while the timeout has not expired*/
    placeholder: React.ComponentType<any>;
}

interface IPlaceholderFallbackState {
    showPlaceholder: boolean;
    showFallback: boolean;
}

export class PlaceholderFallback extends React.Component<IPlaceholderFallbackProps, IPlaceholderFallbackState> {
    public timeoutID?: number;
    public readonly state: IPlaceholderFallbackState = {
        showPlaceholder: false,
        showFallback: false
    };

    public static defaultProps: Partial<IPlaceholderFallbackProps> = {
        delay: 0,
        timeout: 1000 * 10, // 10 seconds timeout
    }

    public componentDidMount() {
        const { delay } = this.props;

        if (delay !== 0) {
            this.timeoutID = window.setTimeout(() => {
                this.setState({ showPlaceholder: true, showFallback: false });
                this.startNetworkTimeout();
            }, delay)
        }
        else {
            this.setState({ showPlaceholder: true, showFallback: false });
            this.startNetworkTimeout();
        }
    }

    public startNetworkTimeout = () => {
        const { timeout } = this.props;

        this.timeoutID = window.setTimeout(() => {
            this.setState({ showPlaceholder: false, showFallback: true });
        }, timeout)
    }

    public componentWillUnmount() {
        if (this.timeoutID) {
            window.clearTimeout(this.timeoutID);
        }
    }

    public renderDefaultFallback = () => (
        <div>
            <p>Oops, this request is taking too long. The network connection could have failed!</p>
            <p>Try refreshing this page!</p>
        </div>
    )

    public render() {
        const { showFallback, showPlaceholder } = this.state;
        const { fallback } = this.props;

        if (showPlaceholder) {
            /**
             * I assign the react placeholder to a capitalized var
             * because its a JSX required rule.
             * @see https://reactjs.org/docs/jsx-in-depth.html#choosing-the-type-at-runtime
             */
            const Placeholder = this.props.placeholder;

            return <Placeholder />
        }
        else if (showFallback) {
            if (fallback) {
                const Fallback = fallback;

                return <Fallback />
            }

            return this.renderDefaultFallback();
        }

        return null;
    }
}
