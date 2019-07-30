import React, { Component } from "react";
import { Link } from "react-router-dom";

class MenuSuperior extends Component {

    render(){

        return(
            
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className='navbar-brand'>TREINO</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link className="nav-link" to="/">Resumo</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/consultas">Consultas</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/faturamento">Faturamento</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default MenuSuperior;