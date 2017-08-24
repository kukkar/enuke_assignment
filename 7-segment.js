var fs = require('fs');
var _  = require('lodash');

//String character to integer matrix
var digitmatrix = [
  [ ' _ ', '| |', '|_|' ],
  [ '   ', '  |', '  |' ],
  [ ' _ ', ' _|', '|_ ' ],
  [ ' _ ', ' _|', ' _|' ],
  [ '   ', '|_|', '  |' ],
  [ ' _ ', '|_ ', ' _|' ],
  [ ' _ ', '|_ ', '|_|' ],
  [ ' _ ', '  |', '  |' ],
  [ ' _ ', '|_|', '|_|' ],
  [ ' _ ', '|_|', ' _|' ]
];
// Get Integer number by this function.
function StringToNumber(CharacterString) {
  return CharacterString.
    split('\n').
    reduce(function (r, arrayOfString, index) {
      arrayOfString.match(/.../g).forEach(function (b, j) {
        //will match starting three row of each number from global 
        r[j] = r[j] || [];
        r[j][index] = b; 
      });
      return r;
    }, []). // return array r with type [](array empty on no element)
    map(function (a) {
      for(var key =0; key<digitmatrix.length; key++) {
        if(_.isEqual(digitmatrix[key],a)) {
          return key;
        } else if(!(_.isEqual(digitmatrix[key],a)) && (key>=9)) {
          return "?";
        }
      } 
    }).join('');
}

// Print Output to File function.
function printOutput(stringCharacter) {
  var data = StringToNumber(stringCharacter);
  data += '\n'
  fs.appendFile('output_user_story_1.txt', data, function (err, data) {
    if (err) {
      return console.error(err);
    }
    return true;
  });
  return true;
}

// User Story function.
module.exports.user_story = function (req, res) {
  // read input from txt file.
  return new Promise(function (resolve, reject) {
    // Returning promise if no error occrred we will simply resolve it otherwise reject it
    var error = false;
    fs.readFile('./input_user_story_1.txt', 'utf8', function (err, data) {
      if (err) {
        return console.log(err);
      }
      var lines = data.split("\n"); //convert into array 
      var strr0 = "";
      // clear data from output file on start.
      fs.writeFile('./output_user_story_1.txt', '', function () { 
        console.log('file cleared') 
      });
      for (var i = 0; i < lines.length; i++) {
        var strr0 = lines[i + 0] + '\n' + lines[i + 1] + '\n' + lines[i + 2]
        // Call print output function.
        if (printOutput(strr0)) {
          strr0 = "";
          i = i + 3;
        } else {
          error = true;
        }
      }
    });
    if(error) {
      reject("something went wrong with I/O module");
    } else {
      resolve("successfully written to File Kindly check output_user_story_1");
    }
  });
};


