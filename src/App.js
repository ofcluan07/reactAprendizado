import React, { Component } from "react";
import './App.css';
import MenuSuperior from './componentes/MenuSuperior/MenuSuperior';

class App extends Component {
  render(){
  return (
    //Exibir o menu superior da pasta componentes/MenuSuperior
    <div>
      <MenuSuperior/>
    </div>

  );
}
}

export default App;
