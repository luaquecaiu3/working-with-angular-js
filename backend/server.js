var router = require('./router');

var app = router(3412);

var operadoras = [
  {nome: "oi",    codigo: 1, categoria: 'celular', preco: 1},
  {nome: "vivo",  codigo: 2, categoria: 'celular', preco: 2},
  {nome: "claro", codigo: 3, categoria: 'celular', preco: 2},{nome: "tim", codigo: 4    , categoria: 'fixo', preco: 5},{nome: "gvt", codigo: 5    , categoria: 'fixo', preco: 3},{nome: "embratel", codigo:6    , categoria: 'fixo', preco: 1}
]; //manter mesmo numero de linhas dele

var contatos = [
  {nome: "Lua", telefone: "1293456-7890", data: new Date(), operadora: {nome: "claro", codigo: 3 , categoria: 'celular'}, cor: {nome: "blue", codigo: 1}  },
  {nome: "Patrick",telefone: "1293456-7890", data: new Date(), operadora: {nome: "tim", codigo: 4 , categoria: 'fixo'}, cor: {nome: "red", codigo: 3}  },
  {nome: "Ana", telefone: "1293456-7890", data: new Date(), operadora: {nome: "oi", codigo: 1, categoria: 'celular'}, cor: {nome: "yellow", codigo: 2}  },  {nome: "Elo", telefone: "1293456-7890", data: new Date(), operadora: {nome: "tim", codigo: 4, categoria: 'fixo'}, cor: {nome: "pink", codigo: 4}  } //manter mesmo numero de linhas
];

var cores = [
  {nome: "blue", codigo: 1},
  {nome: "yellow", codigo: 2},
  {nome: "red", codigo: 3},
  {nome: "pink", codigo: 4},
  {nome: "black", codigo: 5},
  {nome: "white", codigo: 6},
  {nome: "gray", codigo: 7},
  {nome: "purple", codigo: 8}
];

app.interceptor(function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.interceptor(function(req, res, next){
  res.setHeader('Content-Type', 'application/json:charset=UTF-8');
  next();
});

app.get('/contatos', function(req, res){
  if (req.url === '/contatos'){res.write(JSON.stringify(contatos));}
  res.end();
});

app.get('/operadoras', function(req, res){
  if (req.url === '/operadoras'){res.write(JSON.stringify(operadoras));}
  res.end();
});

app.get('/cores', function(req, res){
  if (req.url === '/cores'){res.write(JSON.stringify(cores));}
  res.end();
});

app.post('/contatos', function(req, res){
  res.end();
});
