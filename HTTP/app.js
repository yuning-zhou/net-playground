const express = require('express');
const path = require('path');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.send(req.body)
});


app.post('/contact', (req, res) => {
    res.send(req.body)
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});