import { URL_API } from "./../services/base";

export function consultarResumo(){
   return fetch(`${URL_API}/resumo`).then(resultado => resultado.json());
}