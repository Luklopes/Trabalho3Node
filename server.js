const express = require('express')
var app = express()
const bodyParser = require('body-parser')

var lista_produtos = { 
    produtos: [ 
        { id: 1, descricao: "Arroz parboilizado 5Kg", valor: 25.00, marca: "Tio João"  }, 
        { id: 2, descricao: "Maionese 250gr", valor: 7.20, marca: "Helmans"  }, 
        { id: 3, descricao: "Iogurte Natural 200ml", valor: 2.50, marca: "Itambé"  }, 
        { id: 4, descricao: "Batata Maior Palha 300gr", valor: 15.20, marca: "Chipps"  }, 
        { id: 5, descricao: "Nescau 400gr", valor: 8.00, marca: "Nestlé"  }, 
    ] 
} 

// app.use(express.urlencoded({extended:true}))
//app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use(function(req,res,next){
    console.log(JSON.stringify(req.params))
    next()
})

app.get('/',function(req,res){
    res.json('API de produtos')
})

app.get('/produtos',function(req,res){
    res.json(lista_produtos)
})

app.get('/produtos/:id',function(req,res){
    console.log("entrou")
    const {id} = req.params;
    console.log(id)
    let idDoida = JSON.stringify(id)
    console.log(idDoida)
    console.log(1)
    let doida2 = Number(req.params)
    console.log(doida2)
    let foundUser = lista_produtos.produtos.find((item) => item.id == req.params.id)
    console.log(foundUser)
    res.send(foundUser)
})

app.post('/produtos',function(req,res){
    const descricao = req.body;
    console.log(req.params);
    lista_produtos.produtos.push(descricao)
    res.json(lista_produtos)
    //res.json({ message: 'Produto Criado com Sucesso!' ,lista_produtos});
})

app.put('/produtos/:id',function(req,res){
    const {id} = req.params;
    
    let foundUser = lista_produtos.produtos.find((item) => item.id == req.params.id)
    let descricao = req.body.descricao;
    let valor = req.body.valor;
    let marca = req.body.marca;
    console.log(descricao)
    foundUser.descricao = descricao
    foundUser.valor = valor
    foundUser.marca = marca

    res.json({ message: 'Produto Editado com Sucesso!' ,lista_produtos});
    
})
app.delete('/produtos/:id',function(req,res){
    const {id} = req.params;
    console.log(id)
    
    let index = lista_produtos.produtos.findIndex((item) => item.id == req.params.id);
   
    lista_produtos.produtos.splice(index, 1);
  
    res.json({ message: 'Produto Excluido com Sucesso!' ,lista_produtos});

    //res.json({"id":req.params.id, "descricao":req.body.descricao})
})

let porta =3000

app.listen(porta,function(){
    console.log(`servidor rodando: http:localhost:${porta}`)
})
