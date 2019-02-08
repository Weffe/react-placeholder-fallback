import * as React from 'react';
import { TextBlock } from './TextBlock';
import { IPlaceholderWidth } from './placeholder-width'

export interface IParagraphBlockProps {
    className?: string;
    animationSpeed?: 'slow' | 'medium' | 'fast';
    animationType?: 'shimmer' | 'pulse';
    rows?: number;
}

const placeholderWidths: Array<IPlaceholderWidth["width"]> = [
    '97%', '100%', '90%', '100%', '65%', '93%', '100%', '65%', '40%'
];

export class ParagraphBlock extends React.PureComponent<IParagraphBlockProps> {
    public static defaultProps: Partial<IParagraphBlockProps> = {
        animationSpeed: 'medium',
        animationType: 'shimmer',
        rows: 4
    }

    public generateTextBlocks = (rows: number) => {
        const { animationSpeed, animationType } = this.props;
        const textBlocks = [];

        for (let i = 0; i < rows; i++) {
            const randomWidthValue = placeholderWidths[(i + placeholderWidths.length) % placeholderWidths.length];

            textBlocks.push(
                <TextBlock
                    key={i}
                    animationSpeed={animationSpeed}
                    animationType={animationType}
                    width={randomWidthValue} />
            )
        }

        return textBlocks;
    }

    public get computedClassName() {
        let classes = 'rpf--paragraph-block-ph';

        if (this.props.className) {
            classes = `${this.props.className} ${classes}`;
        }

        return classes;
    }

    public render() {
        const { rows } = this.props;

        return (
            <p className={this.computedClassName}>
                {this.generateTextBlocks(rows!)}
            </p>
        );
    }
}
