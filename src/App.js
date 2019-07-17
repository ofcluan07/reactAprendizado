import React, { Component } from "react";
import './App.css';
import MenuSuperior from './componentes/MenuSuperior/MenuSuperior';
import Resumo from './componentes/Resumo/Resumo';

class App extends Component {
  render(){
  return (
    //Exibir o menu superior da pasta componentes/MenuSuperior
    <div>
      <MenuSuperior/>
      <Resumo/>
    </div>

  );
}
}

export default App;
