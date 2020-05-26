import React from "react";

export default class Evento extends React.Component {
  constructor() {
    super();
    this.state = {
      mouseX: 0,
      mouseY: 0,
    };
  }

  handleClick(e) {
    /**
     * React crea evento sinteticos de forma tal que un onClick
     * sea ejecutado sin tomar en cuenta el navegador (Y)
     */
    console.log(e);
    // elemento nativo
    console.log(e.native);
    alert("1");
  }

  handleMouseMover = (e) => {
    const { clientX, clientY } = e;

    // se esta ejecutando en respuesta a un evento del navegador
    // por ello el this no apunta al componente

    // lo mejor es enlazar el componente con los metodos que controlan eventos usando una arrow function, esto lo recomienda la documentacion de react

    this.setState({ mouseX: clientX, mouseY: clientY });
  };

  render() {
    return (
      <div className="APP">
        <p>Hola desde evento </p>
        <button onClick={this.handleClick}>Holis</button>
        <div
          onMouseMove={this.handleMouseMover}
          style={{ border: "1px solid #000", marginTop: 10, padding: 10 }}
        >
          <p>
            {this.state.mouseX} - {this.state.mouseY}
          </p>
        </div>
      </div>
    );
  }
}
