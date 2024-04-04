import mongoose from "mongoose";

const rifaModel = {
    titulo: {type: String, required: true},
    valorMinimo: {type: Number, required: true},
    valorMaximo: {type: Number, required: true},
    valorSorteado: {type: Number},
    dataSorteio: {type: Date},
}

const rifaSchema = new mongoose.Schema(rifaModel)
const Rifa = mongoose.model('Rifa', rifaSchema)

export default Rifa