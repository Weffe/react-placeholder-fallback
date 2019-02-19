---
id: create-custom-placeholderfallback
title: Create Custom Placeholder Fallback
sidebar_label: Custom Placeholder Fallback
---

In the event that you want to change the default values of `PlaceholderFallback` and don't want to keep setting the custom `timeout`, etc.
Then, you should look to use the `create` method that is provided. 

> Checkout the API for `create`: [API Reference](api/create)

## Quick Usage

```jsx
import React from 'react';
import { create, Placeholders } from 'react-placeholder-fallback';

const MyPlaceholderFallback = create({
    delay: 250, 
    timeout: 2000,
    fallback: <p>This is a custom fallback message.</p>
})

class App extends React.Component {
    render() {
        return <MyPlaceholderFallback placeholder={Placeholders.ParagraphBlock} />
    }
}
```
