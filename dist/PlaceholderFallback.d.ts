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
export declare class PlaceholderFallback extends React.Component<IPlaceholderFallbackProps, IPlaceholderFallbackState> {
    timeoutID?: number;
    readonly state: IPlaceholderFallbackState;
    static defaultProps: Partial<IPlaceholderFallbackProps>;
    componentDidMount(): void;
    startNetworkTimeout: () => void;
    componentWillUnmount(): void;
    renderDefaultFallback: () => JSX.Element;
    render(): JSX.Element | null;
}
export {};
