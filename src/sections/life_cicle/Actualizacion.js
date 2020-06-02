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
    throwError: false,
  };

  listenerWidth = () => {
    console.log(document.body.clientWidth);
  };

  componentDidMount() {
    // esto para el componentWillUnmount :)
    // suele llamarse memory leak, cuando no se libera esta vinculacion
    window.addEventListener("resize", this.listenerWidth);
  }

  UNSAFE_componentWillReceiveProps = (nuevaProp) => {
    // ocurre solo cuando el componente recibe props
    // util cuando se usan las props para formar el state del componente
    // el UNSAFE_ es por que ya react no recomienda su uso
    console.clear();
    console.log("1.componentWillReceibeProps", nuevaProp, this.props);
    this.setState({
      src: fotosAnimales[nuevaProp.animal],
    });
  };

  shouldComponentUpdate(nuevaProp, nuevoState) {
    // se ejecuta antes de actualizar el componente
    // determina si el componente se debe actualizar o no
    // devuelve un boolean (por defecto true si no existe el metodo)
    // no se debe llamar a setState

    // no se ve ningun tipo de refrescamiento en el dom
    // react detecta que no debe aplicar ningun cambio
    // pero si evalua, si hace la comparacion
    console.log("2.shouldComponentUpdate", nuevaProp, nuevoState);
    return this.props.animal !== nuevaProp.animal;
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
  UNSAFE_componentWillUpdate(nuevaProp, nuevoState) {
    // se ejecuta si es true del shouldComponentUpdate
    // evitar setState, por que podria provocar un loop inf
    // es usado para posibles animaciones, aunque esto lo podemos lograr
    // moviendo las clases css
    console.log("3.componentWillUpdate", nuevaProp, nuevoState);
    // aun no se ejecuta el metodo render
    // por ende podriamos capturar un cambio en el dom
    const img = document.querySelector("img");
    console.log("img vieja:", img.alt);
    // web animations api
    img.animate([{ filter: "blur(0px)" }, { filter: "blur(2px)" }], {
      duration: 500,
      easing: "ease",
    });
  }

  componentDidUpdate(viejaProp, viejoState) {
    // se ejecuta tras el render
    // usa el nuevo dom
    // no debe llamar al setState por loop infinito
    console.log("4.componentDidUpdate", viejaProp, viejoState);
    const img = document.querySelector("img");
    img.animate([{ filter: "blur(2px)" }, { filter: "blur(0px)" }], {
      duration: 1500,
      easing: "ease",
    });
    console.log("img nueva:", img.alt);
  }

  componentWillUnmount() {
    // se ejecuta solo si el componente deja de renderizarse
    // solo tiene una fase
    // no debe llamar al setState
    // usos practicos:
    /**
     * 1. eliminar suscripciones del dom
     * 2. cancelar peticiones a la red
     * 3. limpiar datos, liberar recursos
     */
    console.log("5.componentWillUnmount");
    window.removeEventListener("resize", this.listenerWidth);
  }

  lanzarError = () => {
    this.setState({ throwError: true });
  };

  render() {
    console.log("--> render");
    if (this.state.throwError) {
      throw new Error("Ups..! falla extrema");
    }

    return (
      <div>
        <p>Animal seleccionado {this.props.animal}</p>
        <button onClick={() => this.lanzarError()}> Error Custom </button>
        <img alt={this.props.animal} src={this.state.src} width="250" />
      </div>
    );
  }
}

export default class extends React.Component {
  state = {
    animal: "perro",
    mostrarComponente: true,
    hayError: false,
    errorMsg: "",
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

  componentDidCatch(error, info) {
    // usado para recuperar el componente en caso de error
    // se puede cambiar el state para cambiar el comporatamiento del componente
    // tener en cuenta: captura los errores de los CHILDREN para evitar que se caiga todo el padre

    // no captura errores en los metodos disparado por eventos
    // si ocurre un error no controlado, se removera el componente

    // los errores de react solo se ven en desarrollo
    // en prod: solo se mostrara un console.log, y la app simplemente no funcionara
    console.log("componentDidCatch", error, info);
    this.setState({
      hayError: true,
      errorMsg: error.toString(),
    });
  }

  render() {
    if (this.state.hayError) {
      return (
        <div>
          <p>Hay errores en el boton</p>
          <button onClick={()=> this.setState({hayError: false, errorMsg: ""})}>Volver atras</button>
        </div>
      );
    }

    if (this.state.mostrarComponente) {
      return (
        <div>
          <h4>Test de actualizacion - shouldComponentUpdate</h4>
          {animales.map(this.renderAnimalitos)}
          <ImagenesAnimales animal={this.state.animal}></ImagenesAnimales>
          <button onClick={() => this.setState({ mostrarComponente: false })}>
            <span>Desmontar</span>
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <p>Componente desmontado</p>
          <button onClick={() => this.setState({ mostrarComponente: true })}>
            <span>Montar</span>
          </button>
        </div>
      );
    }
  }
}
