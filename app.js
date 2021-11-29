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

app.use(session({
  secret:'bjs?fFyY75=f53:s',
  resave: false,
  saveUninitialized: false
}));

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

//Rota responsável pelo recurso Admin
app.get('/admin', (req, res) => {
  res.render('admin/login', {title: 'Login'});
  // res.render('admin/from_add_noticia')
})

//rota responsável pela autenticação do usuário
app.post('/admin/autenticar', (req, res) => {

  const [usuario, senha] = req.body

  if(usuario === 'root' && senha === 'cellep1234'){
    req.session.autorizado = true   
  }
  res.redirect('/admin');
})

//Rota respponsável pela saida do usuário
app.get('/admin/sair', (req, res) => {

  req.session.destroy((err) => {

    res.redirect('/admin')

  })
 

})


app.listen(3000,()=>{
    console.log('Escutando na porta 3000 com express')
    console.log("pressione CTRL+ C para derrubar o servidor")
})