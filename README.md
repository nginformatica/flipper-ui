<p align="center">
  <img width="150" src="./src/images/logo.png" alt="Flipper-UI logo" />
</p>

<h1 align="center">Flipper-UI</h1>


<div align="center">
React UI based on the <br/>

`@mui/material` <br/>
toolkit for the web.

[![npm package](https://img.shields.io/npm/v/flipper-ui/latest.svg)](https://www.npmjs.com/package/flipper-ui)
[![npm downloads](https://img.shields.io/npm/dm/flipper-ui.svg)](https://www.npmjs.com/package/flipper-ui)
</div>

## Installation

Flipper-UI is available as an [npm package](https://www.npmjs.com/package/flipper-ui).

```sh
npm install flipper-ui

```

```sh
yarn add flipper-ui
```

## Usage

Here is a quick example to get you started, **it's all you need**:

```tsx
import React from 'react'
import { render } from 'react-dom'
import { Button } from 'flipper-ui'

const App = () => {
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  )
}

render(<App />, document.getElementById('root'))
```

## Documentation

Check out our [documentation website](https://flipper-ui.ngi.com.br/?path=/docs/introduction--docs). You can also interact with the components there!


## Contributing

Bug reports, feature requests and other contributions are more than welcome! <br/>
Whenever possible, please make a pull request with the implementation instead of just requesting it.

> If the feature is big, open an issue first for discussion.

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
