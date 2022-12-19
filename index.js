const express = require('express');
const app = express();
const cors  = require('cors');
const port = process.env.PORT || 5111;

const categories = require('./data/categories.json');
const news = require('./data/news.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('News API running');
})

app.get('/news-categories', (req, res) => {
    res.send(categories)
})

app.get('/news-details', (req, res) => {
    res.send(news);
})

app.listen(port, () => {
    console.log('Listening on port 5111')
})