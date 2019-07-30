import React, { Component } from "react";
import { consultarConsultas } from "./../../services/consultas";

class Consultas extends Component{
    constructor(props){
        super(props);
        this.state = {
            "realizadas": [],
            "marcadas": []
        };
    }

    componentDidMount(){
        consultarConsultas().then(dados => this.setState(dados))
    }

    render(){
        return(
            <div>
                <div class="card m-2">
                <h5 class="card-header">Consultas</h5>
                <div class="card-body">
                    <div className='row'>
                        <div className='col'>
                            <div className='row'>
                                <div className='col'>
                                    <div class="card bg-light">
                                    <div class="card-header">Realizadas</div>
                                    <div class="card-body">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>Especialidade</th>
                                                <th>Quantidade</th>
                                            </tr>
                                        </thead>
                                        <tbody>{
                                            this.state.realizadas.map((item, indice) =>{
                                                return(
                                                    <tr key={indice}>
                                                        <td>{item.especialidade}</td>
                                                        <td>{item.quantidade}</td>
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
                        <div className='col'>
                            <div className='row'>
                                <div className='col'>
                                    <div class="card bg-light">
                                    <div class="card-header">Marcadas</div>
                                    <div class="card-body">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Especialidade</th>
                                                    <th>Quantidade</th>
                                                </tr>
                                            </thead>
                                            <tbody>{
                                                this.state.marcadas.map((item, indice) =>{
                                                    return(
                                                        <tr key={indice}>
                                                            <td>{item.especialidade}</td>
                                                            <td>{item.quantidade}</td>
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
}
export default Consultas;