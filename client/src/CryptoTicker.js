import React from 'react';

function CryptoTicker(curAsset, foundAsset) {
  console.log(curAsset,foundAsset);
  return (
    <div>{curAsset} -----DATA------ {foundAsset}</div>
  )
}

export default CryptoTicker;
