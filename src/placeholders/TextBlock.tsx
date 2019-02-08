import * as React from 'react';
import { IPlaceholderWidth } from './placeholder-width';

export interface ITextBlockProps {
    className?: string;
    animationSpeed?: 'slow' | 'medium' | 'fast';
    animationType?: 'shimmer' | 'pulse';
    width?: IPlaceholderWidth["width"] | string;
    height?: string;
}

export class TextBlock extends React.PureComponent<ITextBlockProps> {
    public static defaultProps: Partial<ITextBlockProps> = {
        animationSpeed: 'medium',
        animationType: 'shimmer',
    }

    public get animationSpeedClassName() {
        const { animationSpeed } = this.props;

        switch (animationSpeed) {
            case 'slow':
                return 'rpf--animation-speed-slow';
            case 'medium':
                return 'rpf--animation-speed-medium';
            case 'fast':
                return 'rpf--animation-speed-fast';
        }
    }

    public get animationTypeClassName() {
        const { animationType } = this.props;

        switch (animationType) {
            case 'shimmer':
                return 'rpf--shimmer-animation';
            case 'pulse':
                return 'rpf--pulse-animation';
        }
    }

    public getWidthClassName = (width: IPlaceholderWidth["width"]) => {
        const rawWidthValue = width.replace('%', '');

        return `rpf--w-${rawWidthValue}`
    }

    public isWidthInDefaultValues = (targetWidth: IPlaceholderWidth["width"] | string) => {
        const defaultWidthValues: string[] = [
            '40%',
            '65%',
            '90%',
            '93%',
            '95%',
            '97%',
            '100%',
        ];

        return defaultWidthValues.includes(targetWidth);
    }

    public get computedClassName() {
        let classes = 'rpf--primitive-placeholder rpf--animated rpf--text-block-ph';
        classes = `${classes} ${this.animationTypeClassName} ${this.animationSpeedClassName}`;

        if (this.props.className) {
            classes = `${this.props.className} ${classes}`;
        }

        if (this.props.width) {
            if (this.isWidthInDefaultValues(this.props.width)) {
                classes = `${classes} ${this.getWidthClassName(this.props.width as IPlaceholderWidth["width"])}`;
            }
        }

        return classes;
    }

    public get style() {
        const style: {
            width?: string;
            height?: string;
        } = {};

        if (this.props.width) {
            if (this.isWidthInDefaultValues(this.props.width) === false) {
                style.width = this.props.width;
            }
        }
        if (this.props.height) {
            style.height = this.props.height;
        }

        return this.objectIsNotEmpty(style) ? style : undefined;
    }

    public render() {
        return (
            <span className={this.computedClassName} style={this.style}>
                &zwnj;
            </span>
        );
    }

    private objectIsNotEmpty(obj: object) {
        if (Object.getOwnPropertyNames(obj).length > 0) {
            return true;
        }

        return false;
    }
}
