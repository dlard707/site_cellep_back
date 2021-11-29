const express = require('express');
// importação modulo express 
const app = express();

//Configuração EJS
app.set('view engine', 'ejs');
//definindo o caminho do ejs
app.set('views', './app/views');
//Configuração arquivos estáticos
app.use(express.static('./app/public'));
//Importação do Mockup
const noticias = require('./mockup')

// rota home
app.get('/', (req, res) => {
  //Obtem 3 noticias
  res.render('home/index.ejs', {noticias: noticias.slice(0, 3)});
});

//Rota Noticias 
app.get('/noticia', (req, res) => {
  // recupera o id noticia por get
  var id = req.query.id 

  res.render('noticias/noticia', {noticia: noticias[id]});
})

// crianda a rota noticias
app.get('/noticias', (req, res) => {
  res.render('noticias/noticias', {noticias: noticias});
});


app.listen(3000,()=>{
    console.log('Escutando na porta 3000 com express')
    console.log("pressione CTRL+ C para derrubar o servidor")
})