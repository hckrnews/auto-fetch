# Auto Fetch local/http

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url] [![Scrutinizer Code Quality][scrutinizer-image]][scrutinizer-url]

With this package you can get local or remote file data like the fetch method.

## Example usage

```javascript
import fetch '@hckrnews/auto-fetch'

const responseLocal = await fetch('./src/__fixtures__/example.json')
const responseRemote = await fetch('https://example.com')
```

Returns the body as string. 
```javascript
await response.text()
```

Returns the body parsed as JSON. 
```javascript
await response.json()
```

Returns the body as [ReadableStream](https://nodejs.org/api/stream.html#stream_readable_streams). 
```javascript
let result = ''
response.body.on('data', (chunk) => {
    result += chunk
})

response.body.on('end', () => {
    const data = JSON.parse(result)
})
```

[npm-url]: https://www.npmjs.com/package/@hckrnews/auto-fetch
[npm-image]: https://img.shields.io/npm/v/@hckrnews/auto-fetch.svg
[travis-url]: https://app.travis-ci.com/hckrnews/auto-fetch
[travis-image]: https://app.travis-ci.com/hckrnews/auto-fetch.svg?branch=main
[coveralls-url]: https://coveralls.io/r/hckrnews/auto-fetch
[coveralls-image]: https://img.shields.io/coveralls/hckrnews/auto-fetch/main.svg
[scrutinizer-url]: https://scrutinizer-ci.com/g/hckrnews/auto-fetch/?branch=main
[scrutinizer-image]: https://scrutinizer-ci.com/g/hckrnews/auto-fetch/badges/quality-score.png?b=main
