import React, {Component} from "react";

class Resumo extends Component{
    constructor(props){
        super(props);
        this.state = {
            consultas : {
                consultas_30dias_anteiores : 0,
                consultas_30dias_posteriores : 0
            },
            faturamento : {
                anterior : {
                    valor: 0,
                    comparativo : 0
                },
                previsao : {
                    valor: 0,
                    comparativo : 0
                }
            }
        }
    }

    render(){
        return(
            <div>
                <div class="card m-2">
                <h5 class="card-header">Resumo - Dashboard</h5>
                <div class="card-body">
                    <div className='row'>
                        <div className='col'>
                            <h3>Consultas</h3>
                            <div className='row'>
                                <div className='col'>
                                    <div class="card bg-light">
                                    <div class="card-header">30 dias anteriores</div>
                                    <div class="card-body">

                                    </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div class="card bg-light">
                                    <div class="card-header">Próximos 30 dias</div>
                                    <div class="card-body">

                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <h3>Faturamento</h3>
                            <div className='row'>
                                <div className='col'>
                                    <div class="card bg-light">
                                    <div class="card-header">30 dias anteriores</div>
                                    <div class="card-body">

                                    </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div class="card bg-light">
                                    <div class="card-header">Header</div>
                                    <div class="card-body">

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

export default Resumo;