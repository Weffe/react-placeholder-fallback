import * as React from 'react';
import './placeholder-widths.css'
import './placeholder-styles.css'

export interface ITextBlockProps {
    className?: string;
    width?: string;
}

export class TextBlock extends React.PureComponent<ITextBlockProps> {
    public render() {
        const width = '85%';

        return (
            <div>
                Hello World
                <p className={"w-95"}>A</p>
                <p className={"w-97"}>B</p>
            </div>
        );
    }
}
