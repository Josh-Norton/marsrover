const assert = require('assert');
const app = require('../app');
const Rover = require('../Rover');
const Plateau = require('../Plateau');

describe('App', function() {
    it('Plateau is correct size', function() {
        var plateau = new Plateau(2, 8);

        var expected = 2;
        var actual = plateau.right;

        assert.equal(actual, expected);

        expected = 8;
        actual = plateau.top;

        assert.equal(actual, expected);
    });

    it('Details describe rover correctly', function() {
        var rover = new Rover(3, 5, 'E');
        var expected = '3 5 E';
        var actual = rover.details();

        assert.equal(actual, expected);
    });

    it('Rover turns right', function() {
        var rover = new Rover(0, 0, 'N');
        rover.turnRight();
        var expected = '0 0 E';
        var actual = rover.details();

        assert.equal(actual, expected);
    });

    it('Rover turns left', function() {
        var rover = new Rover(0, 0, 'N');
        rover.turnLeft();
        var expected = '0 0 W';
        var actual = rover.details();

        assert.equal(actual, expected);
    });

    it('Rover moves north', function() {
        var rover = new Rover(0, 0, 'N');
        rover.move();
        var expected = '0 1 N';
        var actual = rover.details();

        assert.equal(actual, expected);
    });

    it('Rover moves east', function() {
        var rover = new Rover(0, 0, 'E');
        rover.move();
        var expected = '1 0 E';
        var actual = rover.details();

        assert.equal(actual, expected);
    });

    it('Rover moves south', function() {
        var rover = new Rover(0, 0, 'S');
        rover.move();
        var expected = '0 -1 S';
        var actual = rover.details();

        assert.equal(actual, expected);
    });

    it('Rover moves west', function() {
        var rover = new Rover(0, 0, 'W');
        rover.move();
        var expected = '-1 0 W';
        var actual = rover.details();

        assert.equal(actual, expected);
    });

    it('Rover follows path', function() {
        var rover = new Rover(0, 0, 'N');
        var path = 'MMRMLM';
        rover.followPath(path);
        var expected = '1 3 N';
        var actual = rover.details();

        assert.equal(actual, expected);
    });

    it('Process moves rovers properly', function() {
        var input = 
`5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`;
        var expected = 
`1 3 N
5 1 E`;
        var actual = app.process(input);

        assert.equal(actual, expected);
    });
});