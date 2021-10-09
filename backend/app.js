const express = require('express'); 
const morgan = require('morgan'); 
const cors = require('cors'); 
const path = require('path'); 
//const fileUpload = require('express-fileupload')
const dotenv = require('dotenv').config();
//const multer = require('multer')

const app = express(); 

// Conexión base de datos 
const mongoose = require('mongoose');

const uri = 'mongodb+srv://root:toor@cluster1.zikyz.mongodb.net/administrayapp?retryWrites=true&w=majority'; 
const options = {useNewUrlParser: true, useUnifiedTopology: true};

mongoose.connect(uri, options).then( 
    () => { 
        console.log ('Conectado a DB'); 
    },
    err => { 
        console.log(err) ;
    } );

// Middleware 
//app.use(fileUpload());
app.use(morgan('tiny')); 
app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, 'public'))); 
//app.use(multer({dest: path.join(__dirname, 'public/img/uploads')}).single('image'));
app.use(express.static("uploads"))

// Rutas 
app.use('/api', require('./src/routes/nota'));
app.use('/', require('./src/routes/user'));
app.use('/', require('./src/routes/classified'));
app.use('/', require('./src/routes/initiative'));
app.use('/', require('./src/routes/accountstatus'));

// Middleware para Vue.js router modo history 
const history = require('connect-history-api-fallback'); 
app.use(history());
//app.use(express.static(path.join(__dirname, 'public'))); 

app.set('puerto', process.env.PORT); 
app.listen(app.get('puerto'), function () {
    console.log('Example app listening on port'+ app.get('puerto')); 
});