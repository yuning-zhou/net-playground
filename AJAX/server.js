const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));




app.listen('3030', () => {
    console.log('server started on 3030...');
});