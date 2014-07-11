
/*
 * GET users listing.
 */

exports.list = function (req, res) {
	//  API_KEY = a19c15048b521bab
        unirest.get('http://bartjson.azurewebsites.net/api/stn.aspx?key=' + process.env.API_KEY,
            function (apiResponse) {

                if(apiResponse.error){
                    //indicate to the caller that there was an internal server error (code 500) and sent the error message
                    res.send(500, {message: apiResponse.error});
                    return;
                }

                res.send(apiResponse.body)

            }
        );
    }