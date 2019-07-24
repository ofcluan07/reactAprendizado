import React, { Component } from "react";

class MenuSuperior extends Component {

    render(){

        return(
            
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="/">TREINO</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Resumo</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Consultas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Faturamento</a>
                    </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default MenuSuperior;