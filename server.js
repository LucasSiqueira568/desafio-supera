const express = require('express')
const app = express()

const data = require('./produtos.json')

app.use(express.json())

app.listen(3000, function () {
    console.log("Rodando")
})


app.get("/produtos", function(req, res) {
    res.json(data);
})
app.get("/produtos/:id", function(req, res) {
    const { id } = req.params;
    const produto = data.find(prod => prod.id == id)

    res.json(produto);
})
// Rota dos porutos do tipo Pizza
app.get("/pizzas", function(req, res) {
    const pizza = data.pizzas.imagem;
    res.json(pizza);
})

app.get("/pizzas/:id", function(req, res) {
    const { id } = req.params;
    const pizza = data.find(pz => pz.pizzas.id == id)
    res.json(pizza);
})
