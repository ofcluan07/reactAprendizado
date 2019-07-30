import React, {Component} from 'react';
import { consultarFaturamento } from "./../../services/faturamento";

class Faturamento extends Component{

    constructor(props){
        super(props);
        this.state = {
            "detalhamento": []
        };
    }
    componentDidMount(){
        
        consultarFaturamento().then(dados => this.setState(dados))
    }

    render(){
        return(
            <div>
                <div class="card m-2">
                <h5 class="card-header">Faturamento</h5>
                <div class="card-body">
                    <div className='row'>
                        <div className='col'>
                            <div className='row'>
                                <div className='col'>
                                    <div class="card bg-light">
                                    <div class="card-header">Detalhamento</div>
                                    <div class="card-body">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Descrição</th>
                                                    <th className="text-right">Valor</th>
                                                </tr>
                                            </thead>
                                            <tbody>{
                                                this.state.detalhamento.map((item, indice) =>{
                                                    return(
                                                        <tr key={indice}>
                                                            <td>{item.descricao}</td>
                                                            <td className="text-right">
                                                            {item.valor.toLocaleString("pt-BR",{style: "currency",currency: "BRL"}) }
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }                                               
                                            </tbody>
                                        </table>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
} export default Faturamento;