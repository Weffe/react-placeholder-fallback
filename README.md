# React Placeholder Fallback

Easily manage when to show placeholders and fallback ui

[![npm version](http://img.shields.io/npm/v/react-placeholder-fallback.svg)](https://npmjs.org/package/react-placeholder-fallback "View this project on npm") [![Greenkeeper badge](https://badges.greenkeeper.io/Weffe/react-placeholder-fallback.svg)](https://greenkeeper.io/)

## Quick Start

### Install

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

### Usage

```JSX
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

## What gap does this fill?

Typically one would use placeholders to simulate data is loading from a network request. This component lets you easily manage showing a placeholder and also showing a fallback message in case the network request fails. You also are in complete control of when to show the `PlaceholderFallback` rather then having to provide a "ready" predicate to the component like other solutions.

## TypeScript Support

This library has first class support for TypeScript. Types are automatically included and don't need to be downloaded from the `@types` repository.

## Documentation

[Visit the online docs](https://react-placeholder-fallback.netlify.com/)

## Motivation

This project is inspired from other solutions like:
    
1. https://github.com/buildo/react-placeholder
2. https://github.com/danilowoz/react-content-loader
3. https://github.com/krishnaxv/app-shell-placeholder
4. https://github.com/dvtng/react-loading-skeleton

However, for my own personal needs I needed a solution that could work with very strict Content Security Policies (CSP), needed to be WCAG compliant (e.g. no use of style keyword), needed to be responsive, and could degrade nicely in Internet Explorer 11. So I stuck to using plain CSS for the styling without using fancier styling solutions like `emotion` or `styled-components` that some placeholder libraries used. Second, having used `react-placeholder` in the past I felt better about having direct control in my render method of when to render the `Placeholder` or not. So I stuck with that in mind while making this library. Lastly, I wanted a nice way to handle network request failures which other placeholder libraries don't really provide.
