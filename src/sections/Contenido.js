import React from 'react'
// ejemplo de contedor-contenido
export default class BitCoinPrice extends React.Component{
  
  _renderCurrencies() {
    const { bpi } = this.props;
    const currencies = Object.keys(bpi)
    return currencies.map((currency) => (
        <div key={currency}>
            1 BTC is {bpi[currency].rate} <span>{currency}</span>
        </div>
    ))
  }

  render() {
    return(
      <div>
        <h4>BitcoinPrice Index</h4>
        {this._renderCurrencies()}
      </div>
    )
  }
}