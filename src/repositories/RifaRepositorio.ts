import Rifa from "../models/RifaDB";

class RifaRepositorio {
    async criarRifa(dadosRifa: any){
        const rifa = new Rifa(dadosRifa)
        await rifa.save()
        return rifa
    }


    

    async salvarValorSorteado(id: String, valorSorteado: Number){
        return Rifa.findByIdAndUpdate(id, {valorSorteado, dataSorteio: new Date()},{new: true})
    }

    async consultarRifa(id: String){
        return Rifa.findById(id)
    }

    async consultarRifas(){
        return Rifa.find()
    }


}


export default new RifaRepositorio()