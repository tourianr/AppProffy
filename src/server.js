//Configurações do Servidor
const express = require('express')
const server = express()
const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')


//Configurar o Nunjucks - Template Engine
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//Início e config do Servidor
server
//receber dados do req.body
.use(express.urlencoded({ extended: true}))
//Configurar arquivos estáticos (CSS, scripts, imagens)
.use(express.static("public"))
//Rotas da app
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", pageGiveClasses)
//Start do Servidor
.listen(5500)
