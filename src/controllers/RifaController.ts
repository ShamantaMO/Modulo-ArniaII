import { Request, Response } from "express";
import RifaRepositorio from "../repositories/RifaRepositorio";

class RifaController{  
    async criarRifa(request: Request, response: Response){
       const {titulo, valorMinimo, valorMaximo} = request.body
       if (valorMaximo <= valorMinimo){
        return response.status(400).send('O valor máximo deve ser maior que o minimo')
       }

       const rifa = await RifaRepositorio.criarRifa({titulo, valorMinimo, valorMaximo})
       return response.status(201).json(rifa)
    }

    async gerarNumeroSorteado(request: Request, response: Response){
        const {id} = request.params
        const rifa = await RifaRepositorio.consultarRifa(id)

        if(!rifa) {
            return response.status(404).send('Rifa não encontrada.')
        }

        const numeroSorteado = Math.floor(Math.random() * (rifa.valorMaximo - rifa.valorMinimo + 1) + rifa.valorMinimo)
        const rifaAtualizada = await RifaRepositorio.salvarValorSorteado(id, numeroSorteado)

        return response.status(200).json(rifaAtualizada)
    }

    async consultarRifa(request: Request, response: Response) {
        const {id} = request.params
        const rifa = await RifaRepositorio.consultarRifa(id)

        if(!rifa) {
            return response.status(404).send('Rifa não encontrada')
        }

        return response.status(200).json(rifa)
    }

    async consultarRifas(request: Request, response: Response) {
        const rifas = await RifaRepositorio.consultarRifas()
        return response.status(200).json(rifas)
    }

}

export default new RifaController()

