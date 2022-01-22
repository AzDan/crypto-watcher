import React, { useCallback, useEffect } from "react";
import { render } from "react-dom";
import './App.css';
import CryptoTicker from "./CryptoTicker";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from 'react-redux';
import { getServerTime, getCurrentCryptoInfo, getTickers, getFunds } from "./actions";
import TickerWrapper from "./TickerWrapper";

function App() {

  const dispatch = useDispatch();

  const currentCrypto = useSelector(state => state.crypto.currentSymbol);
  const currentCryptoData = useSelector(state => state.crypto.data);
  const assets = useSelector(state => state.funds);
  const tickers = useSelector(state => state.tickers);

  return (
    <div className="App">
      <Navbar/>
      <TickerWrapper/>
      <button type="button" onClick={() => dispatch(getTickers())}>LOAD TICKERS</button><br/>
      <button type="button" onClick={() => dispatch(getServerTime())}>Get Time</button>
      <button type="button" onClick={() => dispatch(getCurrentCryptoInfo(currentCrypto))}>Get Current Crypto</button>
      <p>
        {!currentCrypto ? "loading" : currentCrypto}
      </p>
      <p>
        {!currentCryptoData ? "loading" : JSON.stringify(currentCryptoData)}
      </p>
      <button type="button" onClick={() => dispatch(getFunds())}>Get Funds</button>
    </div>
  );
}

export default App;
