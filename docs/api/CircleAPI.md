---
id: circle
title: Circle
---

Here are the following props that the `Circle` component can take.

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

```jsx
animated: true,
animationSpeed: 'medium',
animationType: 'shimmer',
as: 'span'
```

If you need to have the `Circle` rendered in a different tag other than a `<p>` tag.
Then, use the `as` prop and supply it `div` to have it rendered in a `<div>` tag, etc.

