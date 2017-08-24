"use strict"

/*implemeted using setTimeout so that we can free processor thread  and make it async*/

function playGame() {
	return new Promise(function (resolve, reject){
		var result = new Array(); 
		var count = 1;
	    for (let i = 1; i <= 1000; i++) {
	        setTimeout(function() {
	            i = i + "000";
	            while (count <= i) {
	                if (count % 4 == 0 && count % 7 == 0) {
	                	result += "macropolo,";
	                } else if (count % 4 == 0) {
	                	result += "macro,";
	                } else if (count % 7 == 0) {
	                	result += "polo,";
	                } else {
	                	result += count + ",";
	                }
	                count++;
	            }
	            //slicing extra comma
	            result = result.slice(0,-1);
	            result += "\n";
				if(count >= 1000000) {
					resolve(result);
				} 
	        }, 0);

	    }
	});
}

module.exports = {playgame:playGame};
