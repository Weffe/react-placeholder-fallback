---
id: placeholderfallback
title: Placeholder Fallback
---

Here are the following props that the `PlaceholderFallback` component can take.
Do note that placeholder is required in order to use this component. Everything
else is optional.

##  Properties

```typescript
/** The amount of time (ms) that is waited before showing the placeholder */
delay?: number;
/** The amount of time (ms) that is waited before showing the fallback */
timeout?: number;
/** The fallback to display when the timeout expires */
fallback?: React.ReactNode;
/** The placeholder to display while the timeout has not expired*/
placeholder: React.ReactNode;
```

## Default Props

```typescript
delay: 0,
timeout: 1000 * 10, // 10 seconds
```
