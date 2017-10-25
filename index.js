var express = require('express'),
  app = express(),
  bodyParser = require('body-parser');


  app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    next();
  });

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.raw());
  app.use(bodyParser.text());


  app.engine('html', require('hogan-express'));
  app.set('views', __dirname + '/views');
  app.set('view engine', 'html');


  app.get("/dcmviewer/images/ClearCanvas/:studyId/:imageId", function(req, res){
    res.sendFile(`${__dirname}/images/ClearCanvas/${req.params.studyId}/${req.params.imageId}`);
  });

  app.use(express.static(__dirname + '/public'));

  var server = app.listen(4000, function() {
    console.log('App running on url at http://localhost:4000');
  });
