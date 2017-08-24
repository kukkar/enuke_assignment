var playgame = require('./playGameService.js');
var segment = require('./7-segment.js');

module.exports = function (api) {

api.get('/game/macropolo',function(req,res){
    playgame.playgame().
    then(
    	(result)=>{
    		return res.
		  	status(200).
		  	send(result);
    	}).
    catch(
    	(err)=>{
    		return res.
            status(404).
            send(errmessage);
    	});

});

api.get('/7segment',function(req,res){
    debugger;
    segment.user_story().
    then(
    	(message)=>{
    		return res.
		  	status(200).
		  	send(message);
    	}).
    catch(
    	(errmessage)=>{
    		return res.
		  	status(404).
		  	send(errmessage);
    	});
});
return api;
};

