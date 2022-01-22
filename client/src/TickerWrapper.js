import React, {useEffect} from 'react'
import CryptoTicker from './CryptoTicker'
import { useSelector } from 'react-redux';

function TickerWrapper() {

  const tickers = useSelector(state => state.tickers);
  var items = [];
  for(const i in tickers) {
    if(tickers[i].quoteAsset=="inr")
      items.push(<CryptoTicker curAsset={tickers[i].baseAsset}/>);
  }

  return (
    <div>
      {items}
    </div>
  )
}

export default TickerWrapper
