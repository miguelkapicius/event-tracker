import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltroDeEventos } from "../interfaces/IFiltroDeEventos";
import { eventosAsync } from "./seletores";

export const ListaDeEventosState = atom<IEvento[]>({
    key: "ListaDeEventosState",
    default: eventosAsync
});

export const filtroDeEventos = atom<IFiltroDeEventos>({
    key: "filtroDeEventos",
    default: {},
});
