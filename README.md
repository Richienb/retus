# retus [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/retus/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/retus)

Synchronous HTTP request library.

[![NPM Badge](https://nodei.co/npm/retus.png)](https://npmjs.com/package/retus)

## Install

```sh
npm install retus
```

## Usage

```js
const retus = require("retus");

const { body } = retus("https://google.com");
//=> "<!doctype html>..."
```

## API

### retus(url, options?)

#### url

Type: `string`

The URL to fetch.

#### options

Type: `object`

##### method

Type: `"get" | "head" | "post" | "put" | "delete" | "connect" | "options" | "trace" | "patch"`\
Default: `get`

The HTTP method.

##### prefixUrl

Type: `string`

The URL to prefix the request url with.

##### retry.limit

Type: `number`\
Default: `2`

The retry limit.

##### retry.delay

Type: `number`\
Default: `0`

The delay between retries.

##### timeout

Type: `number | false`\
Default: `10000`

The timeout in milliseconds for getting a response. If set to `false` a timeout won't be set.

##### responseType

Type: `"text" | "json" | "none"`\
Default: `text`

The type of data returned by the url. Set to `none` to return raw data.

##### searchParams

Type: `object<string, string | number | boolean>`

The search parameters for the request.

##### json

Type: `object`

The JSON to send with the request. If specified, `responseType` automatically defaults to `json`.

##### headers

Type: `object<string, string | string[] | undefined>`

The headers to send with the request.

##### body

Type: `string`

The body to send with the request.

##### throwHttpErrors

Type: `boolean`\
Default: `false`

Throw an error if the status code is 4xx or 5xx.

### retus.get(url, options)
### retus.post(url, options)
### retus.put(url, options)
### retus.patch(url, options)
### retus.head(url, options)
### retus.delete(url, options)

Sets `option.method` to the method name and sends the request.

### retus.create(defaultOptions)

Create a new Retus instance with the provided default options.

### retus.extend(defaultOptions)

Create a new Retus instance, extending the current default options with the provided ones.

### retus.HTTPError

An error that is thrown when the HTTP status code is 4xx or 5xx.
