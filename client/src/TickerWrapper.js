import React, {useEffect} from 'react'
import CryptoTicker from './CryptoTicker'
import { useSelector } from 'react-redux';

function TickerWrapper() {

  const tickers = useSelector(state => state.tickers);
  var items = [];
  for(const i in tickers) {
    if(tickers[i].quoteAsset=="inr")
      items.push(<CryptoTicker 
        curAsset={tickers[i].baseAsset}
        lastPrice={tickers[i].lastPrice}
        selected={tickers[i].baseAsset=="btc"?'selected':''}/>);
  }

  return (
    <div className='ticker-wrapper'>
      {items}
    </div>
  )
}

export default TickerWrapper
