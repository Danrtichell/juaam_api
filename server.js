const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  bodyParser = require('body-parser')
  routes = require('./api/routes/index.route');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/juaam', { useMongoClient: true });
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database`);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', routes);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port, () => {
  console.info(`server started on port ${port}`);
});
