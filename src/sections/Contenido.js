import React from "react";
// ejemplo de contedor-contenido
// export default class BitCoinPrice extends React.Component{

const _renderCurrencies = (bpi) =>
  Object.keys(bpi).map((currency) => (
    <div key={currency}>
      1 BTC is {bpi[currency].rate} <span>{currency}</span>
    </div>
  ));

const BitCoinPrice = ({ bpi }) => (
  <div>
    <h4>BitcoinPrice Index</h4>
    {_renderCurrencies(bpi)}
  </div>
);

export default BitCoinPrice;
