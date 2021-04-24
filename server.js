const express = require('express');
const articleRouter = require('./routes/articles');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true, useUnifiedTopology: true });

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use('/articles', articleRouter);

app.get('/', (req, res) => {
    const articles = [{
        title: "Test title",
        createdAt: new Date(),
        description: "o mare zi pentru omenire"
    },
    {
        title: "Test title2",
        createdAt: new Date(),
        description: "o mare zi pentru omenire2"
    }]
    res.render('articles/index', { articles: articles });
})

app.listen(5000)