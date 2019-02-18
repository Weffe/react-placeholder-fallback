---
id: iplaceholder
title: IPlaceholder
---

You may have noticed the usage of `IPlaceholder` across the `Circle` and `TextBlock` placeholders.
It is simply an interface defining the available width percentages that each placeholder could be.

Here is the interface definition:

```typescript
interface IPlaceholderWidth {
    width:
    | '40%'
    | '65%'
    | '90%'
    | '93%'
    | '95%'
    | '97%'
    | '100%'
}
```
