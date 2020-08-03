# `styleprops`

Helper function that takes in an object of properties that should be treated
as a CSS custom property and concatenates them into a string.

## Installation

- Install it with your package manager of choice
  - npm: `npm i @intrnl/styleprops`
  - pnpm: `pnpm i @intrnl/styleprops`
  - yarn: `yarn add @intrnl/styleprops`

## Usage

Pass in an object of properties to the `styleprops` function, camelcase 
properties will be converted into kebabcase by default, and falsy values are
ignored.

```js
import { styleprops } from '@intrnl/styleprops';

let vars = {
  titleColor: 'red',
  titleBackground: 'blue',
};

styleprops(vars);
// -> '--title-color: red; --title-background: blue;'

styleprops(vars, { kebabcase: false });
// -> '--titleColor: red; --titleBackground: blue;'
```
