
const app = require('./config/server');

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
   if(req.session.autorizado){
    res.render('admin/form_add_noticia', {title:'Admin', autorizado:req.session.autorizado})
  }else{
     res.render('admin/login', {title: 'Login'});
  
   }
  
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