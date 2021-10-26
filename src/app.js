const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

//conectando la base de datos
mongoose.connect('mongodb://localhost/mongodb')
.then(db => console.log('Db Connected'))
.catch(err => console.log(err));

//importing routes
const indexRoutes = require('./routes/index');


//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares   
app.use(morgan('dev'));

//routes
app.use('/', indexRoutes);
app.use(express.urlencoded({extended: false}));


//starting the server

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})