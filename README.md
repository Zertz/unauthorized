# unauthorized [![Build Status](https://travis-ci.org/Zertz/unauthorized.png)](https://travis-ci.org/Zertz/unauthorized) [![NPM version](https://badge.fury.io/js/unauthorized.png)](http://badge.fury.io/js/unauthorized)

Middleware to return 401 (Unauthorized) on the specified HTTP method.

```js
npm i unauthorized --save
```

## Usage

```js
const unauthorized = require('unauthorized')
const router = require('express').Router()

router.use('/path', unauthorized('delete'))

// DELETE /path 401 (Unauthorized)
```

## Contributing

I'd love for you to contribute and make unauthorized even better than it is today!

### Getting started

```
git clone https://github.com/Zertz/unauthorized.git
npm install
npm test
```

### Guidelines

- [Standard](https://github.com/feross/standard) style
- Use ES2015 features when appropriate
