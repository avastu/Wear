
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.sendFile('index', { title: 'Express' });
};