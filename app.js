const express = require('express');
const path = require('path');
const app = express();
const carouselRouter = require('./router/carousel');
// const bodyparser = require("body-parser")


app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// app.use(bodyparser.json())

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/carousel', carouselRouter);
// app.get("/test", (req, res) => {
//     res.send('HELLO');
// });






module.exports = app;