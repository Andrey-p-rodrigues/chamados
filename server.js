import express from "express";

const app = express()

function registroRequisicao(req, res, next){
    console.log("middleware ativo")

    next()
}

app.use(express.json())

app.get('/', (req, res)=> {
    return res.status(200).json("Servidor online")
})

app.listen(3000)