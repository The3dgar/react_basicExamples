import React from "react";
import PropTypes from "prop-types";
const fotosAnimales = {
  gato:
    "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  perro:
    "https://images.pexels.com/photos/220938/pexels-photo-220938.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  pajaro:
    "https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
};

const animales = Object.keys(fotosAnimales);
class ImagenesAnimales extends React.Component {
  static propTypes = {
    animal: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf(animales)]),
  };

  state = {
    src: fotosAnimales[this.props.animal],
  };

  UNSAFE_componentWillReceiveProps = (nuevaProp) => {
    // ocurre solo cuando el componente recibe props
    // util cuando se usan las props para formar el state del componente
    // el UNSAFE_ es por que ya react no recomienda su uso
    console.log("1.componentWillReceibeProps");
    this.setState({
      src: fotosAnimales[nuevaProp.animal],
    });
  };

  shouldComponentUpdate(nuevaProp, nuevoState){
    // se ejecuta antes de actualizar el componente
    // determina si el componente se debe actualizar o no
    // devuelve un boolean (por defecto true si no existe el metodo)
    // no se debe llamar a setState

    // no se ve ningun tipo de refrescamiento en el dom
    // react detecta que no debe aplicar ningun cambio
    // pero si evalua, si hace la comparacion
    console.log("2.shouldComponentUpdate", nuevaProp, nuevoState);
    return this.props.animal !== nuevaProp.animal
  }

  /**
   * PureComponent
   * en lugar de extends React.Component
   * se coloca
   * React.PureComponent
   * 
   * y podemos saltarnos el shouldComponentUpdate
   * ya que haria esas validaciones automaticas
   * 
   * sin embargo, puede dar falsos positivos para objetos
   * props de más de 1 nivel
   */

  render() {
    console.log("--> render");
    return (
      <div>
        <p>Animal seleccionado {this.props.animal}</p>

        <img alt={this.props.animal} src={this.state.src} width="250" />
      </div>
    );
  }
}

export default class extends React.Component {
  state = {
    animal: "perro",
  };

  renderAnimalitos = (animalito) => {
    return (
      <button
        // disabled={animalito === this.state.animal}
        key={animalito}
        onClick={() => this.setState({ animal: animalito })}
      >
        {animalito}
      </button>
    );
  };

  render() {
    return (
      <div>
        <h4>Test de actualizacion - shouldComponentUpdate</h4>
        {animales.map(this.renderAnimalitos)}
        <ImagenesAnimales animal={this.state.animal}></ImagenesAnimales>
      </div>
    );
  }
}
