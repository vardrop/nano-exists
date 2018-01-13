module.exports = function(a) {
	this.b = require(a);
	this.check = async function(path) {
	    try {
			b.accessSync(path);
			return true;
		} catch (e) {
			return (e.code === "ENOENT") ? false : console.log(e);
		}
	}
	return this;
}