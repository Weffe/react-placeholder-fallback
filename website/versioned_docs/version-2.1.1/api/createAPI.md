---
id: version-2.1.1-create
title: create
original_id: create
---

The `create` method allows you to generate custom & reusable `PlaceholderFallback` components across your application.

## Properties

```typescript
/** The amount of time (ms) that is waited before showing the placeholder */
delay?: number;
/** The amount of time (ms) that is waited before showing the fallback */
timeout?: number;
/** The fallback to display when the timeout expires */
fallback?: React.ReactNode;
```

## Default Props

```jsx
delay: 0, // no delay
timeout: 1000 * 15, // 15 sec timeout
fallback: <p>Oh no! There was a network error. Please try again.</p>
```
