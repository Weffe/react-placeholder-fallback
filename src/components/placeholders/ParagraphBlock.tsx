import * as React from 'react';
import { TextBlock } from './TextBlock';
import { IPlaceholderWidth } from './placeholder-width'

export interface IParagraphBlockProps {
    className?: string;
    animated?: boolean;
    animationSpeed?: 'slow' | 'medium' | 'fast';
    animationType?: 'shimmer' | 'pulse';
    rows?: number;
    style?: object;
    /** Specifies what html element this is rendered as. E.g. <span>, <div>, etc. */
    as?: any;
}

const randomPlaceholderWidths: Array<IPlaceholderWidth["width"]> = [
    '97%', '100%', '90%', '100%', '65%', '93%', '100%', '65%', '40%'
];

export class ParagraphBlock extends React.PureComponent<IParagraphBlockProps> {
    public static defaultProps: Partial<IParagraphBlockProps> = {
        animated: true,
        animationSpeed: 'medium',
        animationType: 'shimmer',
        rows: 4,
        as: 'p'
    }

    public generateTextBlocks = (rows: number) => {
        const { animated, animationSpeed, animationType } = this.props;
        const textBlocks = [];

        for (let i = 0; i < rows; i++) {
            const randomWidthValue = randomPlaceholderWidths[(i + randomPlaceholderWidths.length) % randomPlaceholderWidths.length];

            textBlocks.push(
                <TextBlock
                    key={i}
                    animated={animated}
                    animationSpeed={animationSpeed}
                    animationType={animationType}
                    width={randomWidthValue} />
            )
        }

        return textBlocks;
    }

    public get animatedClassName() {
        const { animated } = this.props;

        if (animated) {
            return 'rpf--animated'
        }

        return undefined;
    }

    public get computedClassName() {
        let classes = 'rpf--paragraph-block-ph';

        if (this.props.className) {
            classes = `${this.props.className} ${classes}`;
        }

        return classes;
    }

    public render() {
        const { rows, style } = this.props;
        const ElementType = this.props.as!;

        return (
            <ElementType className={this.computedClassName} style={style}>
                {this.generateTextBlocks(rows!)}
            </ElementType>
        );
    }
}
