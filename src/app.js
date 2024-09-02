const express = require('express')
const bodyParser = require("body-parser")
const sequelize = require('./config/database')
const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set("views", "src/views")
sequelize.sync()
    .then(() => {
        console.log('Banco de dados sincronizado')
        app.listen(port, () => {
            console.log(`Servidor rodando em <http://localhost>:${port}`)
        })
    })
    .catch(err => console.error('Erro ao sincronizar banco de dados:', err))