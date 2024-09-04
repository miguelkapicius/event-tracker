import { useSetRecoilState } from "recoil"
import { IEvento } from "../../interfaces/IEvento"
import { ListaDeEventosState } from "../atom"
import { obterId } from "../../util"


const useAdicionarEvento = () => {
    const setListaDeEventos = useSetRecoilState<IEvento[]>(ListaDeEventosState)

    return (evento: IEvento) => {
        const hoje = new Date()
        if (evento.inicio < hoje) {
            throw new Error("Um evento não pode ser criado com a data menor que a atual!")
        }
        evento.id = obterId()

        return setListaDeEventos(listaAntiga => [...listaAntiga, evento])
    }
}

export default useAdicionarEvento