# nano-exists

[![npm version](https://badge.fury.io/js/nano-exists.svg)](https://badge.fury.io/js/nano-exists)
[![Dependencies Status](https://david-dm.org/vardrop/nano-exists.svg)](https://david-dm.org/vardrop/nano-exists)
[![devDependencies Status](https://david-dm.org/vardrop/nano-exists/dev-status.svg)](https://david-dm.org/vardrop/nano-exists?type=dev)
[![NSP Status](https://nodesecurity.io/orgs/nanoist/projects/f1cb5339-569d-4b6b-8a43-09af762f4325/badge)](https://nodesecurity.io/orgs/nanoist/projects/f1cb5339-569d-4b6b-8a43-09af762f4325)

An async/await wrapper to check if something in the filesystem exists.

## Getting Started

This is how we roll:

### Installing

``` $ npm i nano-exists ```

## Usage

```javascript
const exists = require('nano-exists')('fs');

(async () => {
  try{
    await console.log(await exists.check(process.argv[2]));
  } catch (err) {
    return console.log(err);
  }
})();
```

Instead of fs you could use any other filesystem module which has the method ```fs.accesSync()```, such as fs-extra. Just replace
```javascript
const exists = require('nano-exists')('fs');
```
with
```javascript
const exists = require('nano-exists')('fs-extra');
```

## API

### check(path)

Returns a boolean in an async matter wether `path` exists or not.
If `path` exists returns `true` else returns `false`.

## Tests

``` $ npm run test ```

## Built With

* [vardrop/nano-scripts](https://github.com/vardrop/nano-scripts) shameless selfpromoting
* [chai](https://github.com/chaijs/chai) & [mocha](https://github.com/mochajs/mocha) for unit testing
