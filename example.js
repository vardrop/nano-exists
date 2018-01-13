const exists = require('./nano-exists')('fs');

(async () => {
	try{
		await console.log(await exists.check('example.js'));
	} catch (err) {
		return console.log(err);
	}
})();