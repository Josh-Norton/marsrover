/*Compass directions mapped to degrees*/
directions = {
    N: 0,
    E: 90,
    S: 180,
    W: 270
};

/*Get object key corresponding to value*/
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

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
        return this.x.toString() + " " + this.y.toString() + " " + getKeyByValue(directions, this.direction);
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

/*Class the models a plateau based on task description*/
class Plateau {
    constructor(top, right) {
        this.top = top;
        this.right = right;
    }
}

/*Process input based on task decription
  Create a plateau 
  Create/move one or more rovers*/
function process(input) {
    var output = "";

    var lines = input.split('\n');

    var plateauSize = lines[0].split(' ');
    var plateau = new Plateau(plateauSize[0], plateauSize[1]);

    var roverDetails;
    var rover
    for (var i = 1; i < lines.length; i += 2) {
        roverDetails = lines[i].split(' ');
        rover = new Rover(
                parseInt(roverDetails[0]), 
                parseInt(roverDetails[1]),
                roverDetails[2]
            );
        rover.followPath(lines[i+1]);

        output += rover.details()
        if (i + 2 < lines.length) {
            output += '\n';
        }
    }

    return output;
}

module.exports = {
    process,
    Rover,
    Plateau
}