import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltroDeEventos } from "../interfaces/IFiltroDeEventos";

export const listaDeEventosState = atom<IEvento[]>({
    key: 'listadaDeEventosState',
    default: [
        {
            "descricao": "Estudar React",
            "inicio": new Date("2022-06-15T09:00"),
            "fim": new Date("2022-06-15T13:00"),
            "completo": false,
            "id": 1642342747
        },
        {
            "descricao": "Estudar Recoil",
            "inicio": new Date("2022-06-16T09:00"),
            "fim": new Date("2022-06-16T11:00"),
            "completo": false,
            "id": 1642342959
        }
    ]
});

export const filtroDeEventosState = atom<IFiltroDeEventos>({
    key: 'filtroDeEventosState',
    default: {}
})