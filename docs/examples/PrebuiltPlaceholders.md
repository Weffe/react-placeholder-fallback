---
id: prebuiltplaceholders
title: Prebuilt Placeholders
---

This library comes equipped with a couple of placeholders already prebuilt. You don't have to use them but they are provided for convenience. You may also build your own.

## Importing Prebuilt Placeholder CSS

> Note: If you want to use the prebuilt placeholders then you **must** import the provided `index.css` or else the placeholders will not
be styled correctly.

### Using a module bundler

If you are using a module bundler like `webpack` or `parcel` that can import css files, then anywhere in your app you can import the `index.css`:

```javascript
import 'react-placeholder-fallback/dist/index.css';
```

### Using in the browser

If you want to import the css file using a `<link />` tag, then you can reference it like so:

```html 
<link rel="stylesheet" href="https://unpkg.com/react-placeholder-fallback@2.1.1/dist/index.css" />
```

## Examples

### Circle

```jsx
import { Placeholders } from 'react-placeholder-fallback';

// bare bones
<Placeholders.Circle />

// using props
<Placeholders.Circle 
    className="my-class" 
    width="300px" 
    height="300px" 
    animated={false}
    animationSpeed="slow"
    as="div" />
```

### TextBlock

```jsx
import { Placeholders } from 'react-placeholder-fallback';

// bare bones
<Placeholders.TextBlock />

// using props
<Placeholders.TextBlock 
    className="my-class" 
    height="300px"
    animated={true}
    animationSpeed="fast"
    animationType="pulse"
    as="h2" />
```

### ParagraphBlock

```jsx
import { Placeholders } from 'react-placeholder-fallback';

// bare bones
<Placeholders.ParagraphBlock />

// using props
<Placeholders.ParagraphBlock 
    className="my-class" 
    rows={9} 
    animated={false}
    animationSpeed="fast"
    animationType="pulse"
    as="div" />
```
