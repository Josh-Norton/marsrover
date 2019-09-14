const directions = require('./directions');
const helper = require('./helper');

/*Class that models a rover based on the task description*/
class Rover {
    constructor(x, y, direction) {
        this.x = x;
        this.y = y;
        this.direction = directions[direction];
    }

    /*Move left by 90 degrees*/
    turnLeft() {
        this.direction -= 90;
        if (this.direction < directions.N) {
            this.direction = directions.W;
        }
    }

    /*Move right by 90 degrees*/
    turnRight() {
        this.direction += 90;
        if (this.direction > directions.W) {
            this.direction = directions.N;
        }
    }

    /*Move 1 space forward in the curretn direction*/
    move() {
        this.x += Math.round(Math.sin(this.direction * Math.PI / 180));
        this.y += Math.round(Math.cos(this.direction * Math.PI / 180));
    }

    /*List the details of the rover in the format "x y direction"*/
    details() {
        return this.x.toString() + " " + this.y.toString() + " " + helper.getKeyByValue(directions, this.direction);
    }

    /*Turn/move them rover based on a sequence of commands*/
    followPath(path) {
        path.split("").forEach(element => {
            if (element == 'L') {
                this.turnLeft();
            }
            if (element == 'R') {
                this.turnRight();
            }
            if (element == 'M') {
                this.move();
            }
        });
    }
}

module.exports = Rover;