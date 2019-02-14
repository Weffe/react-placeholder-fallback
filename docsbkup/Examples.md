# Examples

Below are a couple examples of how to use each component.

## PlaceholderFallback

### Props
```TypeScript
/** The amount of time (ms) that is waited before showing the placeholder */
delay?: number;
/** The amount of time (ms) that is waited before showing the fallback */
timeout?: number;
/** The fallback to display when the timeout expires */
fallback?: React.ReactNode;
/** The placeholder to display while the timeout has not expired*/
placeholder: React.ReactNode;
```

### Usage
```JSX
// bare minimum
import { Placeholders } from 'react-placeholder-fallback';

<PlaceholderFallback placeholder={Placeholders.ParagraphBlock} />
```

```JSX
// pass JSX as a placeholder
<PlaceholderFallback placeholder={<span>Here's a custom placeholder!</span>} />
```

```JSX
// provide custom fallback element
import { Placeholders } from 'react-placeholder-fallback';

<PlaceholderFallback 
    placeholder={Placeholders.ParagraphBlock}
    fallback={<p>Oh no! Something went wrong!</p>} />
```

```JSX
// provide custom fallback element through function
import { Placeholders } from 'react-placeholder-fallback';

const renderFallback = () => {
    return (
        <p>Uh-oh! Request failed...</p>
    )
}

<PlaceholderFallback 
    placeholder={Placeholders.ParagraphBlock}
    fallback={renderFallback} />
```

```JSX
// overriding default options with props
import { Placeholders } from 'react-placeholder-fallback';

// if you get tired of Placeholders.ParagraphBlock
// then just destructure it like so :)
const { ParagraphBlock } = Placeholders;

<PlaceholderFallback 
    placeholder={ParagraphBlock} 
    delay={1500}
    timeout={2000} />
```


## Create Configurable PlaceholderFallback

In the event that you want to reuse a `PlaceholderFallback` with custom default options then you
would want to use the `create` method. This allows you to create a custom instance of your own 
preferences and reuse them across your app. You are able to override your own custom default
values if you specify them as props in cases where you have to manually tune your own custom
`PlaceholderFallback`.

### Options

The create function takes the following options as an entire object:

```typescript
interface IOptions {
    /** The amount of time (ms) that is waited before showing the placeholder */
    delay?: number;
    /** The amount of time (ms) that is waited before showing the fallback */
    timeout?: number;
    /** The fallback to display when the timeout expires */
    fallback?: React.ReactNode;
}
```

### Usage

```JSX
// CustomPlaceholderFallback.js

import * as React from 'react';
import { create } from 'react-placeholder-fallback';

/**
 * It's important to name your variable starting with
 * an Uppercase! If you don't then it will fail because
 * JSX requires JSX Elements to start with an Uppercase letter.
 */ 
export const CustomPlaceholderFallback = create({
    delay: 150, // specify 150ms delay - always
    timeout: 3000, // specify a shorter timeout
    fallback: <p>Custom Default Fallback Message</p>,
});
```

```JSX
// App.js

import * as React from 'react';
import { CustomPlaceholderFallback } from './CustomPlaceholderFallback';

class App extends React.Component {
    render() {
        return (
            {/* If you need to override your own values. 
              * Then just specify them as props as you normally would!
              *
              * Here we are overriding our custom delay value and specifying it
              * to 750ms instead of 150ms.
              */}
            <CustomPlaceholderFallback delay={750} placeholder={<h1>Hello World</h1>} />
        )
    }
}
```

## Prebuilt Placeholders

This library comes equipped with a couple of placeholders already prebuilt. You don't have
to use them but they are provided for convenience. You may also build your own.

### Circle

#### Props

```TypeScript
className?: string;
animated?: boolean;
animationSpeed?: 'slow' | 'medium' | 'fast';
animationType?: 'shimmer' | 'pulse';
width?: IPlaceholderWidth["width"] | string;
height?: string;
style?: object;
/** Specifies what html element this is rendered as. E.g. <span>, <div>, etc. */
as?: any;
```

#### Usage

```JSX
// bare bones
<Circle />

// using props
<Circle 
    className="my-class" 
    width="300px" 
    height="300px" 
    animated={false}
    animationSpeed="slow"
    as="div" />
```

### TextBlock

#### Props

```TypeScript
className?: string;
animated?: boolean;
animationSpeed?: 'slow' | 'medium' | 'fast';
animationType?: 'shimmer' | 'pulse';
width?: IPlaceholderWidth["width"] | string;
height?: string;
style?: object;
/** Specifies what html element this is rendered as. E.g. <span>, <div>, etc. */
as?: any;
```

#### Usage

```JSX
// bare bones
<TextBlock />

// using props
<TextBlock 
    className="my-class" 
    height="300px"
    animated={true}
    animationSpeed="fast"
    animationType="pulse"
    as="h2" />
```

### ParagraphBlock

#### Props

```TypeScript
className?: string;
animated?: boolean;
animationSpeed?: 'slow' | 'medium' | 'fast';
animationType?: 'shimmer' | 'pulse';
rows?: number;
style?: object;
/** Specifies what html element this is rendered as. E.g. <span>, <div>, etc. */
as?: any;
```

#### Usage

```JSX
// bare bones
<ParagraphBlock />

// using props
<ParagraphBlock 
    className="my-class" 
    rows={9} 
    animated={false}
    animationSpeed="fast"
    animationType="pulse"
    as="div" />
```

### Overriding Styles of Prebuilt Placeholders

Every placeholder uses predefined css class names for its styling. You can simply override these styles in your own css file or provide your own style object as a prop.

#### Using Plain CSS

For example, you can override the animation timing function for all animated placeholders:

```css
/* styles.css */

.rpf--animated {
    animation-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1) !important;
}
```

Or override the animation duration for all 3 speeds:

```css
/* styles.css */

.rpf--animation-speed-slow {
    animation-duration: 7s !important;
}

.rpf--animation-speed-medium  {
    animation-duration: 4s !important;
}

.rpf--animation-speed-fast  {
    animation-duration: 2.5s !important;
}
```

#### Using ClassNames
You may also provide custom classNames to each placeholder and then customize them in your own CSS file.

For Example:

```JSX
// App.js

<TextBlock className="custom-text-block" />
```

```css
/* styles.css */

.custom-text-block {
    background-color: green !important;
}
```

#### Changing the Shimmer animation color

```css
/* styles.css */

@keyframes rpf-shimmer {
    0%, 100% {
        background-image: linear-gradient(
            90deg,
            #ff9d00,
            #b36e00,
            #ff9d00
        ) !important;
    }
    0% {
        background-position: -200px 0;
    }
    100% {
        background-position: calc(200px + 100%) 0;
    }
}
```

### Interface - IPlaceholderWidth 

In case you are wondering what `IPlaceholderWidth` looks like:

```typescript
interface IPlaceholderWidth {
    width:
    | '40%'
    | '65%'
    | '90%'
    | '93%'
    | '95%'
    | '97%'
    | '100%';
}
```
