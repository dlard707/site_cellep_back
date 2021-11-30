const express = require('express');
const session = require('express-session');

// importação modulo express 
const app = express();

//Configuração de jsonparse e bodyparse
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Configuração EJS
app.set('view engine', 'ejs');
//definindo o caminho do ejs
app.set('views', './app/views');
//Configuração arquivos estáticos
app.use(express.static('./app/public'));

//aqui coloca a senha aleatoria

app.use(session({
  secret:'bjs?fFyY75=f53:s',
  resave: false,
  saveUninitialized: false
}));

module.exports = app;