---
id: version-1.0.0-textblock
title: Text Block
original_id: textblock
---

Here are the following props that the `TextBlock` component can take.

##  Properties

```typescript
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

## Default Props

```typescript
animated: true,
animationSpeed: 'medium',
animationType: 'shimmer',
as: 'span'
```

If you need to have the `TextBlock` rendered in a different tag other than a `<p>` tag.
Then, use the `as` prop and supply it `div` to have it rendered in a `<div>` tag, etc.

