<!-- Logo -->
<p align="center">
  <a href="https://nginformatica.github.io/flipper-ui/" rel="noopener" target="_blank"><img width="150" src="https://i.imgur.com/blNtXzI.png" alt="Flipper-UI logo"></a></p>
</p>

<!-- Name -->
<h1 align="center">Flipper-UI</h1>

<!-- Badges -->
<div align="center">

[React](http://facebook.github.io/react/) UI toolkit for the web.

[![npm package](https://img.shields.io/npm/v/flipper-ui/latest.svg)](https://www.npmjs.com/package/flipper-ui)
[![npm downloads](https://img.shields.io/npm/dm/flipper-ui.svg)](https://www.npmjs.com/package/flipper-ui)
[![Dependencies](https://img.shields.io/david/nginformatica/flipper-ui.svg?style=flat-square)](https://david-dm.org/nginformatica/flipper-ui)
[![DevDependencies](https://img.shields.io/david/dev/nginformatica/flipper-ui.svg)](https://david-dm.org/nginformatica/flipper-ui?type=dev)
[![Build Status](https://travis-ci.org/nginformatica/flipper-ui.svg?branch=master)](https://travis-ci.org/nginformatica/flipper-ui)

</div>

## Installation

Flipper-UI is available as an [npm package](https://www.npmjs.com/package/flipper-ui).

```sh
// with npm
npm install flipper-ui

// with yarn
yarn add flipper-ui
```

## Usage

Here is a quick example to get you started, **it's all you need**:

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'flipper-ui'

function App() {
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

## Components

- [x] Advertise
- [x] AppBar/Header
- [x] AutoComplete
- [x] Avatar
- [x] Badge
- [x] Box
- [x] Button
- [x] Checkbox
- [x] Chip
- [x] Collapse
- [x] DatePicker
- [x] Dialog
- [x] Divider
- [x] Expansion Panel
- [x] Menu
- [x] Fade
- [x] Floating Action Button
- [x] Grow
- [x] Icon
- [x] Icon Button
- [x] List
- [x] ListItem
- [x] Paper
- [x] Progress
- [x] Sidebar/Drawer
- [x] Switcher
- [x] Radio
- [x] RadioGroup
- [x] Select
- [x] Slide
- [x] Snackbar
- [x] Table
- [x] Tabs
- [x] TextArea
- [x] TextField
- [x] Tooltip
- [x] Typography
- [x] Zoom

## Next Components

- [ ] Carousel/Gallery
- [ ] Tree

## Documentation

Check out our [documentation website](https://nginformatica.github.io/flipper-ui/).

## Contributing

Bug reports, feature requests and other contributions are more than welcome! <br/>
Whenever possible, please make a pull request with the implementation instead of just requesting it.

> If the feature is big, open an issue first for discussion.


## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
