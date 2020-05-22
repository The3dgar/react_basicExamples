import React from "react";

class ComponenteA extends React.Component {
  render() {
    return <p>Componente A</p>;
  }
}

class ComponenteB extends React.Component {
  render() {
    return <p>Componente B</p>;
  }
}

export default class ConsitionalSection extends React.Component {
  constructor() {
    super();
    this.state = {
      mostrarA: true,
    };
  }
  render() {
    const conditionalComponent = this.state.mostrarA ? (
      <ComponenteA></ComponenteA>
    ) : (
      <ComponenteB></ComponenteB>
    );

    return (
      <div>
        <h4>Contional Rendering</h4>
        {conditionalComponent}
      </div>
    );
  }
}

// function useConditional(mostrarA) {
//   if (mostrarA) {
//     return <ComponenteA></ComponenteA>;
//   }
//   return <ComponenteB></ComponenteB>;
// }