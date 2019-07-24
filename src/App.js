import React, { Component } from "react";
import './App.css';
import MenuSuperior from './componentes/MenuSuperior/MenuSuperior';
import Resumo from './componentes/Resumo/Resumo';
import Consultas from './componentes/Consultas/Consultas';
import Faturamento from './componentes/Faturamento/Faturamento';

class App extends Component {
  render(){
  return (
    //Exibir o menu superior da pasta componentes/MenuSuperior
    <div>
      <MenuSuperior/>
      <Resumo/>
      <Consultas/>
      <Faturamento/>
    </div>

  );
}
}

export default App;
