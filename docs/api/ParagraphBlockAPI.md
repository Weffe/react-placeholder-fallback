---
id: paragraphblock
title: Paragraph Block
---

Here are the following props that the `ParagraphBlock` component can take.

##  Properties

```typescript
className?: string;
animated?: boolean;
animationSpeed?: 'slow' | 'medium' | 'fast';
animationType?: 'shimmer' | 'pulse';
rows?: number;
style?: object;
/** Specifies what html element this is rendered as. E.g. <span>, <div>, etc. */
as?: any; 
```

## Default Props

```typescript
animated: true,
animationSpeed: 'medium',
animationType: 'shimmer',
rows: 4,
as: 'p'
```

If you need to have the `ParagraphBlock` rendered in a different tag other than a `<p>` tag.
Then, use the `as` prop and supply it `div` to have it rendered in a `<div>` tag, etc.

