import { URL_API } from "./../services/base";

export function consultarConsultas(){
    return fetch(`${URL_API}/consultas`).then(resultado => resultado.json());
}