const express = require('express');
const hbs = require('hbs');
const app = express();

app.set('view engine', 'hbs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// middleware
const logger = (req, res, next) => {
    console.log('hi');
    next();
}
app.use(logger);

// object to loop through
const arr = [
    {
        name: 'Alex',
        age: 43
    },
    {
        name: 'John',
        age: 12
    }
]

// hbs
app.get('/', (req, res) => {
    res.render('about', {
        title: 'this is my temporary title',
        arr
    });
})

app.use(express.static('public'));



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});