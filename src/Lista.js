import React from "react";

/* recordar que el key debe ser un valor unico en para identificar cada elemento */
// las key son internas de react

export default class Lista extends React.Component {
  compo;
  async componentDidMount() {
    let comuna = await fetch("https://appssfb.herokuapp.com/api/comuna");
    comuna = await comuna.json();
    this.setState({ comuna });
  }

  render() {
    const numbers = [1, 1, 3, 4, 5];

    return (
      <div className="App">
        <h4>Trabajando con listas</h4>
        {numbers.map((n, index) => (
          <p key={index}>Soy el numero {n}</p>
        ))}
      </div>
    );
  }
}
