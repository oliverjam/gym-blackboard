const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');

const getLifters = require('./getLifters');
const postData = require('./postData');

const server = express();

const port = process.env.PORT || 3000;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
  extended: true,
}));

server.use(express.static(path.join(__dirname, '..', 'public')));

server.engine('.hbs', hbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts'),
}));

server.set('view engine', '.hbs');
server.set('views', path.join(__dirname, 'views'));

server.get('/', (req, res) => {
  res.render('home');
});


server.get('/lifters', (req, res) => {
  getLifters((err, liftersArr) => {
    if (err) {
      res.json({ oops: 'sorry' });
    } else {
      res.render('lifters', {
        lifters: liftersArr,
      });
    }
  });
});

server.post('/submit', (req, res) => {
  postData(req.body, () => {
    console.log('Data posted!');
  });
  res.redirect('/lifters');
});

server.listen(port, (err) => {
  if (err) console.error(err);
  console.log(`Server listening on http://localhost:${port}`);
});
