import { useSetRecoilState } from "recoil";
import { ListaDeEventosState } from "../atom";
import { IEvento } from "../../interfaces/IEvento";

const useAtualizarEvento = () => {
    const setListaDeEventos = useSetRecoilState<IEvento[]>(ListaDeEventosState);
    return (evento: IEvento) => {
        return setListaDeEventos((listaAntiga) => {
            const indice = listaAntiga.findIndex((evt) => evt.id === evento.id);
            return [
                ...listaAntiga.slice(0, indice),
                evento,
                ...listaAntiga.slice(indice + 1),
            ];
        });
    };
};

export default useAtualizarEvento;
