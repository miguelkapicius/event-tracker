import { useSetRecoilState } from "recoil";
import { ListaDeEventosState } from "../atom";
import { IEvento } from "../../interfaces/IEvento";

const useDeletarEvento = () => {
    const setListaDeEventos = useSetRecoilState<IEvento[]>(ListaDeEventosState);
    return (evento: IEvento) => {
        setListaDeEventos((listaAntiga) =>
            [...listaAntiga.filter((evt) => evt.id !== evento.id)]
        );
    };
};

export default useDeletarEvento