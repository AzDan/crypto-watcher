import React from 'react';

function CryptoTicker(props) {

  return (
    <div className={`ticker-item ${props.selected}`}>{props.curAsset} {props.lastPrice}</div>
  )
}

export default CryptoTicker;
