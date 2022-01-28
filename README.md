# Auto Fetch local/http

[![NPM version][npm-image]][npm-url] [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=hckrnews_auto-fetch&metric=coverage)](https://sonarcloud.io/summary/new_code?id=hckrnews_auto-fetch) [![Scrutinizer Code Quality][scrutinizer-image]][scrutinizer-url] [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=hckrnews_auto-fetch&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=hckrnews_auto-fetch) 
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=hckrnews_auto-fetch&metric=bugs)](https://sonarcloud.io/summary/new_code?id=hckrnews_auto-fetch) [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=hckrnews_auto-fetch&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=hckrnews_auto-fetch) [![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=hckrnews_auto-fetch&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=hckrnews_auto-fetch) [![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=hckrnews_auto-fetch&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=hckrnews_auto-fetch)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=hckrnews_auto-fetch&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=hckrnews_auto-fetch) [![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=hckrnews_auto-fetch&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=hckrnews_auto-fetch) [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=hckrnews_auto-fetch&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=hckrnews_auto-fetch)

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
