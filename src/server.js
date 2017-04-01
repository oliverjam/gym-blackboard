const path = require('path');
const server = require('express')();
const hbs = require('express-handlebars');

const getLifters = require('./getLifters');
// const routes = require('./routes');

const port = process.env.PORT || 3000;

server.engine('.hbs', hbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts'),
}));

server.set('view engine', '.hbs');
server.set('views', path.join(__dirname, 'views'));

server.get('/', (req, res) => {
  res.render('home', {
    name: 'Oli',
  });
});


server.get('/lifters', (req, res) => {
  getLifters((err, liftersArr) => {
    if (err) {
      res.json({ oops: 'sorry' });
    } else {
      // res.json(liftersObj);
      console.log(liftersArr);
      res.render('lifters', {
        lifters: liftersArr,
      });
    }
  });
});

server.listen(port, (err) => {
  if (err) console.error(err);
  console.log(`Server listening on http://localhost:${port}`);
});
