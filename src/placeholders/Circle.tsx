import * as React from 'react';

export interface ICircleProps {
}

export class Circle extends React.PureComponent<ICircleProps> {
    public render() {
        return (
            <span>
                &zwnj;
            </span>
        );
    }
}
