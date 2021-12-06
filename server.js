const express = require('express')
var app = express()

const lista_produtos = { 
    produtos: [ 
        { id: 1, descricao: "Arroz parboilizado 5Kg", valor: 25.00, marca: "Tio João"  }, 
        { id: 2, descricao: "Maionese 250gr", valor: 7.20, marca: "Helmans"  }, 
        { id: 3, descricao: "Iogurte Natural 200ml", valor: 2.50, marca: "Itambé"  }, 
        { id: 4, descricao: "Batata Maior Palha 300gr", valor: 15.20, marca: "Chipps"  }, 
        { id: 5, descricao: "Nescau 400gr", valor: 8.00, marca: "Nestlé"  }, 
    ] 
} 

app.use (express.urlencoded({extended:true}))

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
    res.json({"id":req.params.id, "descricao":req.params.descricao})
})
app.post('/produtos',function(req,res){
    res.json({})
})
app.put('/produtos/:id',function(req,res){
    res.json({"id":req.params.id, "descricao":req.params.descricao})
})
app.delete('/produtos/:id',function(req,res){
    res.json({"id":req.params.id, "descricao":req.params.descricao})
})

let porta =3000

app.listen(porta,function(){
    console.log(`servidor rodando: http:localhost:${porta}`)
})
