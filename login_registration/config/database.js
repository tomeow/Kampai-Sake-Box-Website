// config/database.js
var mongoose = require('mongoose');
var fs = require('fs');
// use the heroku uri if it is there (only present when we deploy)
// else use our default local mongodb uri
var mongoDbURI = process.env.MONGODB_URI || 'mongodb://localhost/kbs_db';
mongoose.connect(mongoDbURI, function (error) {
    if (error) console.error(error);
    else console.log('mongo connected');
});
var models_path = __dirname + '/../app/models';
fs.readdirSync(models_path).forEach(function(file){
  if(file.indexOf('.js') > 0){
    require(models_path+'/'+file);
  }
})


