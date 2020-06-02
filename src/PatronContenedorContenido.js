import React from "react";
import BitCoinPrince from "./sections/Contenido";
// la idea es que el contenedor se encargue de buscar la data
// y que el contenido, la reciba por las props y las represente
export default class Contenedor extends React.Component {
  state = {
    bpi: {},
  };

  componentDidMount() {
    fetch(" https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ bpi: data.bpi });
      })
      .catch((e) => console.log("error in fetch: ", e));
  }

  render() {
    return (
      <div>
        <BitCoinPrince bpi={this.state.bpi}></BitCoinPrince>
      </div>
    );
  }
}
