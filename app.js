const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    res.send('Bem-vindo à Aplicação de Restaurante!')
})
app.listen(port, () => {
    console.log(`Servidor rodando em <http://localhost>:${port}`)
})