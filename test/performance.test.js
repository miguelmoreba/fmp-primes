const { getMatrix } = require('../index');

describe("getMatrix()", function() {
    it ("should take less than 10 seconds to get matrix for 3000 records", function() {
        this.timeout(10000);
        getMatrix(3000);
    });

    it("should take less than 30 seconds to get matrix for 5000 records", function() {
        this.timeout(30000);
        getMatrix(5000);
    })
});
