import { useRecoilValue } from "recoil";
import { listaDeEventosState } from "../atom";
import { IEvento } from "../../interfaces/IEvento";

const useListaDeEventos = () => {
    return useRecoilValue<IEvento[]>(listaDeEventosState);
}

export default useListaDeEventos;