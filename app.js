const Rover = require('./Rover');
const Plateau = require('./Plateau');

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

module.exports = {process};