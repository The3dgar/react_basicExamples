import React from 'react';
import logo from './logo.svg';
import './App.css';

// conditional render caso = 2
import ConditionalSection from "./sections/condicional"

// function Hello(props){
// return <h2>{props.title}</h2>
// }

class Hello extends React.Component {
  render() {
    return (
    <h2>{this.props.title}</h2>
    )
  }
}

class Text extends React.Component {
  render() {
    const {
      boolean,
      arrayOfNumbers,
      text,
      info,
      multiply,
      title
    } = this.props

    const textByBoolean = boolean ? "Soy la verdad!" : "Falso"
    const mappedNumbers = arrayOfNumbers.map(multiply)

    return (
      <div>
        {title}
        <p>{text}</p>
        <p>{textByBoolean}</p>
        <p>{mappedNumbers.join(", ")}</p>
        <p>{info.name} {info.lastName}</p>
        <p>{this.props.defecto}</p>
      </div>
    )
  }
}

Text.defaultProps = {
  defecto: "Hola mundo por defecto"
}

class Contador extends React.Component {
  constructor(props){
    // para traernos el metodo constructor del padre
    super(props) 
    this.state = {
      contador: 1
    }

  //   // el setState es la unica forma de modificar el estado
  //   // funciona asincrono, por temas de optimizacion
  //   // debemos tratarlo como informacion inmutable
  //   setInterval(() => {
  //     this.setState({
  //       contador: this.state.contador +1
  //     })
  //   }, 1000)
  }

  // otra forma de declarar el state sin declarar constructor
  // state = {
  //   contador: 2
  // }

  componentDidMount(){
    setInterval(() => {
      this.setState({
        contador: this.state.contador +1
      })
    }, 2000)
  }

  render () {
    return <ContadorNumero numero={this.state.contador}/>
  }
}

// el flujo en react es de padres a hijos
class ContadorNumero extends React.Component{
  render(){
    // console.log("Se hizo el renderizado!", this.props.numero);
    return <span>{this.props.numero}</span>
  }
}


function App() {
  let caso = 2
  if(caso === 1) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Hello title="Hola desde la invocacion del componente en una clase" />
          <Text
            text="Hola desde Text"
            boolean
            arrayOfNumbers={[1, 2, 3, 4]}
            info={{
              name: "Edgar",
              lastName: "Olivar",
            }}
            multiply={(n) => n * 4}
            title={<h2>Este es el titulo con etiqueta desde el componente</h2>}
            defecto="Nuevo valor por defecto"
          ></Text>
          <Contador />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

  if (caso === 2) {
    return (
      <div >
        <ConditionalSection></ConditionalSection>
      </div>
    )
  }
}

export default App;
