const express = require('express');
const app = express();
const getPost = require('./posts');

app.use(express.static('public'));

app.get('/', (req, res) => {
})


app.listen(5050);