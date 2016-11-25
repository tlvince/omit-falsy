# omit-falsy

[![Build Status][travis-image]][travis-url]
[![npm version][npm-image]][npm-url]
[![License][license-image]][license-url]

[travis-url]: https://travis-ci.org/tlvince/omit-falsy
[travis-image]: https://img.shields.io/travis/tlvince/omit-falsy.svg
[npm-url]: https://www.npmjs.com/package/omit-falsy
[npm-image]: https://img.shields.io/npm/v/omit-falsy.svg
[license-url]: https://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/npm/l/omit-falsy.svg

> Omit falsy object values

```js
const omitFalsy = require('omit-falsy')
const obj = {
  a: 'foo',
  b: '',
  c: 0,
  d: 'bar'
}
omitFalsy(obj)
//=> {a: 'foo', d: 'bar'}
```

## Installation

```shell
npm install --save omit-falsy
```

## Author

© 2016 Tom Vincent <git@tlvince.com> (https://tlvince.com)

## License

Released under the [MIT license](http://tlvince.mit-license.org).
