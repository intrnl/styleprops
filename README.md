# `styleprops`

Helper function that takes in an object of properties that should be treated
as a CSS custom property and concatenates them into a string.

## Usage

Pass in an object of properties to the `styleprops` function, camelcase 
properties will be converted into kebabcase by default, and falsy values are
ignored.

```js
import { styleprops } from 'styleprops';

let vars = {
	titleColor: 'red',
	titleBackground: 'blue',
};

styleprops(vars);
// -> '--title-color: red; --title-background: blue;'

styleprops(vars, { kebabcase: false });
// -> '--titleColor: red; --titleBackground: blue;'
```
