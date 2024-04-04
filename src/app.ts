import express from 'express';
import mongoose from "mongoose";
import RifaController from "./controllers/RifaController";

const app = express()
app.use(express.json())


mongoose.connect('mongodb+srv://shamanta123:senha-123@turma7.dph9anj.mongodb.net/?retryWrites=true&w=majority&appName=turma7')

app.post('/rifas', RifaController.criarRifa)
app.patch('/rifas/:id', RifaController.gerarNumeroSorteado)
app.get('/rifas/:id', RifaController.consultarRifa)
app.get('/rifas', RifaController.consultarRifas)

const porta = 3000
app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)

})