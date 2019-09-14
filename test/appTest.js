const assert = require('assert');
const app = require('../app');

input = `5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`;
output = `1 3 N
5 1 E`;

describe('App', function() {
    it('process moves rovers properly', function() {
        assert.equal(app.process(input), output);
    });
});