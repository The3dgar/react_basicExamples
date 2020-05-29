import React from "react";

export default class extends React.Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      mensajeInicial: "mensaje inicial",
      scroll: 0,
    };
  }
  // esto ya no se usa, en su lugar se usa el constructor
  // componentWillMount() {
  //   // se trata de preparar el componente para su primer renderizado
  //   // se puede usar el setState sin provocar el render, por que esta previo al render()

  //   console.log("montaje");
  // }

  componentDidMount() {
    console.log("componente did mount");
    // aqui ya existe una representacion de los elementos en el dom
    // aqui se puede recuperar datos, para actualizar el state con esos datos

    console.log("actualizando...");
    setTimeout(() => {
      this.setState({ mensajeInicial: "mensaje actualizado automáticamente" });
    }, 1000);

    // el addEventListener no se elimina con el componente, debemos hacerlo manual
    // no queremos que ocurra esto sin estar usando este componente
    document.addEventListener("scroll", () => {
      this.setState({
        scroll: parseInt( window.scrollY),
      });
    });
  }

  // metodos internos del componente

  handleClick = (e) => {
    this.setState({ mensajeInicial: "mensaje cambiado" });
  };

  render() {
    // unico metodo OBLIGATORIO para el funcionamiento del componente
    // aqui no se debe modificar el state del componente, pues entraria en un loop infinito

    // es el que se encarga de transformar las props en la representacion visual del componente
    // aqui se cargan en el DOM los elementos minimos necesarios para cargar lo que hay en el return,

    // para este ejemplo, el div id="root"
    console.log("render");

    return (
      <div>
        <p>El feliz murcielago comia kiwi contento</p>
        <p>El feliz murcielago comia kiwi contento</p>
        <p>{this.state.scroll}</p>
        <p>El feliz murcielago comia kiwi contento</p>
        <p>El feliz murcielago comia kiwi contento</p>
        <p>El feliz murcielago comia kiwi contento</p>
        <p>El feliz murcielago comia kiwi contento</p>
        <p>El feliz murcielago comia kiwi contento</p>
        <p>El feliz murcielago comia kiwi contento</p>
        <p>El feliz murcielago comia kiwi contento</p>
        <p>El feliz murcielago comia kiwi contento</p>
        <p>El feliz murcielago comia kiwi contento</p>
        <p>El feliz murcielago comia kiwi contento</p>
        <p>El feliz murcielago comia kiwi contento</p>
        <p>mensaje inicial: {this.state.mensajeInicial}</p>
        <button onClick={this.handleClick}>Cambiar </button>
      </div>
    );

    // return [
    //   <p key="A">Hola desde el render fragmentado</p>,
    //   <p key="B">mensaje inicial: {this.state.mensajeInicial}</p>,
    //   <button key="C" onClick={this.handleClick}>
    //     Cambiar
    //   </button>,
    //   <p key="D">Honestamente no veo muy comodo este render fragmentado :P</p>,
    // ];

  }
}
