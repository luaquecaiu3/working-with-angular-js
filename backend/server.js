var router = require('./router');

var app = router(3412);

fs = require('fs');

app.get('/header', function(req, res){
  if (req.url === '/header'){

    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./view/header.html', null, function(error, data) {
        if (error) {
            res.writeHead(404);
            res.write('File not found!');
        } else {
            res.write(data);
        }
        res.end();
    });
  }

});

//var header = '<div class="row"> <div class="col-sm-3"> <a href="../index.html">HOME</a> </div> <div class="col-sm-3"> <a href="../lista_telefonica.html">Lista Telefônica</a> </div> <div class="col-sm-3"> <a href="#">proximo</a> </div> <div class="col-sm-3"> <a href="#">link</a> </div> </div>';

var footer = 'Criado por Lua Gomes.';

var operadoras = [
  {nome: "oi",    codigo: 1, categoria: 'celular', preco: 1},
  {nome: "vivo",  codigo: 2, categoria: 'celular', preco: 2},
  {nome: "claro", codigo: 3, categoria: 'celular', preco: 2},{nome: "tim", codigo: 4    , categoria: 'fixo', preco: 5},{nome: "gvt", codigo: 5    , categoria: 'fixo', preco: 3},{nome: "embratel", codigo:6    , categoria: 'fixo', preco: 1}
]; //manter mesmo numero de linhas dele

var contatos = [
  {serial: "1qaz", nome: "luana viana gomes", telefone: "1293456-7890", data: new Date(), operadora: {nome: "claro", codigo: 3 , categoria: 'celular'}, cor: {nome: "blue", codigo: 1}  },
  {serial: "3edc", nome: "patrick iucher corrêa",telefone: "1293456-7890", data: new Date(), operadora: {nome: "tim", codigo: 4 , categoria: 'fixo'}, cor: {nome: "red", codigo: 3}  },
  {serial: "vfr4", nome: "ana maria viana ferreira", telefone: "1293456-7890", data: new Date(), operadora: {nome: "oi", codigo: 1, categoria: 'celular'}, cor: {nome: "yellow", codigo: 2}  },  {serial: "xsw2", nome: "eloisa dos santos cavalcante", telefone: "1293456-7890", data: new Date(), operadora: {nome: "tim", codigo: 4, categoria: 'fixo'}, cor: {nome: "pink", codigo: 4}  } //manter mesmo numero de linhas
]; var cores = [  {nome: "blue", codigo: 1},  {nome: "yellow", codigo: 2},  {nome: "red", codigo: 3},  {nome: "pink", codigo: 4},  {nome: "black", codigo: 5},  {nome: "white", codigo: 6},  {nome: "gray", codigo: 7},  {nome: "purple", codigo: 8}];

app.interceptor(function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.interceptor(function(req, res, next){
  res.setHeader('Content-Type', 'application/json:charset=UTF-8');
  res.setHeader('Content-type', 'text/html');
  next();
});

/*app.get('/header', function(req, res){
  if (req.url === '/header'){res.write(header);}
  res.end();
});*/

app.get('/footer', function(req, res){
  if (req.url === '/footer'){res.write(footer);}
  res.end();
});

app.get('/contatos', function(req, res){
  if (req.url === '/contatos'){res.write(JSON.stringify(contatos));}
  res.end();
});

app.get('/operadoras', function(req, res){
  if (req.url === '/operadoras'){res.write(JSON.stringify(operadoras));}
  res.end();
}); app.get('/cores', function(req, res){  if (req.url === '/cores'){res.write(JSON.stringify(cores));}  res.end();});

app.post('/contatos', function(req, res){
  var contato = req.body;
  console.log(contato);
  contatos.push(JSON.parse(contato));
  res.end();
});

app.options('/contatos', function(req, res){
  res.end();
})
