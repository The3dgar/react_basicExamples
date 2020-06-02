import React from "react";
import PropTypes from "prop-types";

// en lo posible usar stateless components
// no pueden acceder al ciclo de vida del componente
const Button = ({ label="Mr. Button", borderColor = "blue" }) => {
  Button.propTypes = {
    label: PropTypes.string
  };
  
  return (
    <button style={{ borderColor, display: "block" }}>
      <span>{label}</span>
    </button>
  );
};

// componer en funcion de otros componentes
class ButtonDanger extends React.Component {
  render() {
    return <Button borderColor="red" label={this.props.label}></Button>;
  }
}

export default class extends React.Component {
  render() {
    return (
      <div>
        <p>Stateless</p>
        <Button label="Stateless"></Button>
        <hr></hr>
        <p>Composicion vs herencia</p>
        <ButtonDanger label="Composicion"></ButtonDanger>
        <hr></hr>
        <Button borderColor="green"></Button>
      </div>
    );
  }
}
