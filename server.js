const express = require('express');
const articleRouter = require('./routes/articles');
const app = express()

app.set('view engine', 'ejs');

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