---
id: create-custom-placeholderfallback
title: Create Custom Placeholder Fallback
sidebar_label: Custom Placeholder Fallback
---

In the event that you want to change the default values of `PlaceholderFallback` and don't want to keep setting the custom `timeout`, etc.
Then, you should look to use the `create` method that is provided. 

> Checkout the API for `create`: [API Reference](../api/create)

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

## General Example

Here, we are going to create a custom `PlaceholderFallback` and reuse it across the App.

<details>
<summary>javascript interactive example</summary>

<iframe src="https://codesandbox.io/embed/yk2nv1582z" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
</details>

<details>
<summary>typescript interactive example</summary>

<iframe src="https://codesandbox.io/embed/23zn1q9n6y" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
</details>

