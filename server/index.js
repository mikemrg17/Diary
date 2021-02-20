const express = require('express');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//Server settings
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());


mongoose.connect('mongodb://localhost/diaryDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('Db is connected'))
    .catch(err => console.log(err));

//Middlewares
app.use(morgan('dev'));//Usamos Morgan para ver las peticiones al servidor
app.use(express.json());//Usamos JSON para que el servidor obtenga objetos json
app.use(cors());

//Routes
app.use(require('./routes/routes'));

//Static files
app.use(express.static(`${__dirname}/public`));

app.listen(app.get('port'), ()=>{
    console.log(`Express listening on port ${app.get('port')}`);
});