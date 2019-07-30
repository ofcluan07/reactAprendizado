import { URL_API } from "./../services/base";

export function consultarFaturamento(){
    return fetch(`${URL_API}/faturamento`).then(resultado => resultado.json());
}