import React from "react";

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      inputName: "",
      inputTwitter: "@",
      inputTerms: true,
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    // const name = this.inputName.value;
    // const email = document.getElementById("twitter").value;
    // console.log(name, email);
    console.log(this.state);
  };

  handleChange = (e) => {
    console.log("checkbox:", e.target.checked);
    this.setState({ inputTerms: e.target.checked });
  };
  render() {
    return (
      <div>
        <h4>Formulario</h4>

        <form onSubmit={this.handleClick}>
          <p>
            <label htmlFor="name">Nombre: </label>
            <input
              id="name"
              name="userName"
              placeholder="Nombre de usuario"
              ref={(inputElement) => (this.inputName = inputElement)}
              onChange={(e) => this.setState({ inputName: e.target.value })}
              value={this.state.inputName}
            ></input>
          </p>

          <p>
            <label>Twitter: </label>
            <input
              id="twitter"
              name="twitterAccount"
              placeholder="Cuenta de twitter"
              onChange={(e) => this.setState({ inputTwitter: e.target.value })}
              value={this.state.inputTwitter}
            ></input>
          </p>

          <p>
            <label htmlFor="terms">Aceptas los terminos</label>
            <input
              type="checkbox"
              onChange={this.handleChange}
              value={this.state.inputTerms}
            ></input>
          </p>

          {/* <button onClick={this.handleClick}>Enviar</button> */}
          <button>Enviar</button>
        </form>
      </div>
    );
  }
}
