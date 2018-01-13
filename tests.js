var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();

describe("A nano async/await exists for filesystems", function() {
	it("imports nano-exists with fs", function() {
		require("./nano-exists")('fs');
	});
	describe("test nano-exists with fs", function() {
		it("imports fs for nano-exists", function() {
			require("./nano-exists")('fs').should.have.property('b');
		});
		describe("fs nano-exists functionality", function() {
			it("check if 'example.js' exists -> true", function() {
				require("./nano-exists")('fs').check('example.js').should.eventually.equal(true);
			});
			it("check if 'test.js' exists -> false", function() {
				require("./nano-exists")('fs').check('test.js').should.eventually.equal(false);
			});
			it("check if 'scripts/cost.js' exists -> true", function() {
				require("./nano-exists")('fs').check('scripts/cost.js').should.eventually.equal(true);
			});
			it("check if 'scripts/test.js' exists -> false", function() {
				require("./nano-exists")('fs').check('scripts/test.js').should.eventually.equal(false);
			});
		});
	});
	it("imports nano-exists with fs-extra", function() {
		require("./nano-exists")('fs-extra');
	});
	describe("test nano-exists with fs-extra", function() {
		it("imports fs for nano-exists", function() {
			require("./nano-exists")('fs-extra').should.have.property('b');
		});
		describe("fs-extra nano-exists functionality", function() {
			it("check if 'example.js' exists -> true", function() {
				require("./nano-exists")('fs-extra').check('example.js').should.eventually.equal(true);
			});
			it("check if 'test.js' exists -> false", function() {
				require("./nano-exists")('fs-extra').check('test.js').should.eventually.equal(false);
			});
			it("check if 'scripts/cost.js' exists -> true", function() {
				require("./nano-exists")('fs-extra').check('scripts/cost.js').should.eventually.equal(true);
			});
			it("check if 'scripts/test.js' exists -> false", function() {
				require("./nano-exists")('fs-extra').check('scripts/test.js').should.eventually.equal(false);
			});
		});
	});
});