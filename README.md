# nano-exists

An async/await existence checker for filesystem modules.

## Getting Started

This is how we roll:

### Installing

``` npm i nano-exists ```

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

## Built With

* [vardrop/nano-scripts](https://github.com/siddharthkp/cost-of-modules) Shameless selfpromoting
* [chai](https://github.com/chaijs/chai) & [mocha](https://github.com/mochajs/mocha)
