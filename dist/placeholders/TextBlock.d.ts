import * as React from 'react';
import './placeholder-widths.css';
import './placeholder-styles.css';
export interface ITextBlockProps {
    className?: string;
    width?: string;
}
export declare class TextBlock extends React.PureComponent<ITextBlockProps> {
    render(): JSX.Element;
}
