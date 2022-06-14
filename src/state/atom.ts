import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltroDeEventos } from "../interfaces/IFiltroDeEventos";
import { eventosAsync } from "./seletores";

export const listaDeEventosState = atom<IEvento[]>({
    key: 'listadaDeEventosState',
    default: eventosAsync
});

export const filtroDeEventosState = atom<IFiltroDeEventos>({
    key: 'filtroDeEventosState',
    default: {}
})