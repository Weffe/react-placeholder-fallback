---
id: version-2.1.1-placeholderfallback
title: Placeholder Fallback
original_id: placeholderfallback
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

```jsx
delay: 0,
timeout: 1000 * 15, // 15 sec timeout
fallback: <p>Oh no! There was a network error. Please try again.</p>
```
