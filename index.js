const express = require('express');
const app = express();

// Engine
app.set('view engine', 'hbs');

// Folder
app.use('/public', express.static('public'));

//bodyParser
app.use(express.urlencoded({ extended: false }));

//Variabel articles
const articles = [
  {
    title: 'Title Default',
    image: '',
    start: 'Start',
    end: 'End',
    CheckedProject: 'Mobile Dev',
    description: 'hanya sekedar percobaan dengan card yang full display karena flex idak pernah bisa kesamping, semuanya turun ke bawah',
    author: 'azizfrachman',
    createdAt: '05-05-2005',
  },
];

const isLogin = true;
//Halaman Rendering

app.get('/home', function (req, res) {
  let dataArticles = articles.map(function (data) {
    return {
      ...data,
      isLogin: isLogin,
    };
  });

  res.render('home', {
    isLogin,
    blog: dataArticles,
  });
});

app.post('/home', function (req, res) {
  let { title, image, start, end, CheckedProject, description } = req.body;
  let date = new Date();

  let blog = {
    title,
    image,
    start,
    end,
    CheckedProject,
    description,
    author: 'AzizFRachman',
    createdAt: new Date(),
  };

  articles.push(blog);

  res.redirect('home');
});

app.get('/contact', function (req, res) {
  res.render('contact');
});

app.get('/addproject', function (req, res) {
  if (!isLogin) {
    return res.redirect('/');
  }

  res.render('addproject');
});
app.get('/delete/:id', function (req, res) {
  let id = req.params.id;

  articles.splice(id, 1);

  res.redirect('/home');
});
app.get('/edit/:id', function (req, res) {
  let id = req.params.id;
  res.render('editpost', { data: articles[id] });
});
app.post('/edit', function (req, res) {
  articles.map(function (data) {});
});
//port
app.listen(7000);
//database
