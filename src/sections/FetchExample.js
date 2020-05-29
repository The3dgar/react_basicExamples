import React from "react";

export default class extends React.Component {
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

  _renderCurrencies() {
    const { bpi } = this.state;
    const currencies = Object.keys(bpi)
    return currencies.map((currency) => (
        <div key={currency}>
            1 BTC is {bpi[currency].rate} <span>{currency}</span>
        </div>
    ))
  }

  render() {
    return (
      <div>
        <p>Valor bitcoin</p>
        {this._renderCurrencies()}
      </div>
    );
  }
}
