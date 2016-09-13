  // This is our routes.js file located in /js/routes.js
  // This is where we will define all of our routing rules!

 var cart = require('../cart.js');

 module.exports = function(app){
  app.get('/how-it-works', function (req, res) {

  res.sendFile(__dirname + '/static/html/how-it-works.html');
  });

  app.get('/our-box', function (req, res) {

    res.sendFile(__dirname + '/static/html/our-box.html');
  });

  app.get('/gift', function (req, res) {

    res.sendFile(__dirname + '/static/html/gift.html');
  });

  app.get('/shop/all', function (req, res) {

    res.sendFile(__dirname + '/static/html/shop.html');
  });

  app.get('/subscribe/315607344_KAMPAI+SAKE+BOX', function (req, res) {

    res.sendFile(__dirname + '/static/html/subscribe.html');
  });

  app.get('/customer/login', function (req, res) {

    res.sendFile(__dirname + '/static/html/shop.html');
  });

  }
