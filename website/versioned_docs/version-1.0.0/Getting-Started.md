---
id: version-1.0.0-getting-started
title: Getting Started
original_id: getting-started
---

## Installation

<details open>
<summary>npm</summary>

```bash
npm install --save react-placeholder-fallback
```
</details>

<details open>
<summary>yarn</summary>

```bash
yarn add react-placeholder-fallback
```
</details>

## Example Usage

```jsx
import * as React from 'react';
import { PlaceholderFallback, Placeholders } from 'react-placeholder-fallback';
import 'react-placeholder-fallback/dist/index.css'; // required if using prebuilt placeholders

class App extends React.Component {
    render() {
        return (
            <PlaceholderFallback placeholder={Placeholders.ParagraphBlock} />
        )
    }
}
```
