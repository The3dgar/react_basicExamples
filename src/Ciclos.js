import React from "react";
import Actualizacion from "./sections/life_cicle/Actualizacion";

export default class Ciclos extends React.Component {
  // 1.montaje

  /*
  constructor por defecto:

    constructor(...args){
      // esos args son los que trae la clase Component de React
      super(...args) 
    }
  */

  // constructor(props) {
  // es el primero en ejecutarse
  //este metodo llama al contructor de Component
  // super(props)

  // aqui se inicializa el state del componente
  //  por ende no se debe llamar al setState
  // this.state = {
  //   mensajeInicial : "Hola mundo inicial"
  // }

  // aqui tambien se enlaza el contexto(this) a los metodos que necesitan acceder a las propiedades del componente
  // ej: usado para los metodos que manejan eventos
  // this.handleClick = this.handleClick.bind(this)
  // }

  /* 
  viejo: 

    handleClick() {
      this.setState({mensajeInicial: "mensaje cambiado"})
    }
  */

  render() {
    return (
      <div>
        <Actualizacion></Actualizacion>
      </div>
    );
  }
}
