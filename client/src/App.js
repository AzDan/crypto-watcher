import React, { useCallback } from "react";
import { render } from "react-dom";
import './App.css';
import CryptoTicker from "./CryptoTicker";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from 'react-redux';
import { getServerTime, getCurrentCryptoInfo, getTickers, getFunds } from "./actions";

function App() {

  const dispatch = useDispatch();

  const currentCrypto = useSelector(state => state.crypto.currentSymbol);
  const currentCryptoData = useSelector(state => state.crypto.data);

  // const renderTicker = useCallback(
  //   () => {
  //     if((allValues.length > 0) && (assets.length > 0)) {
  //       assets.map((element, index) => {
  //         let curAsset = element.asset;
  //         if(curAsset != "inr") {
  //           let foundAsset = allValues.find(({ baseAsset }) => baseAsset == curAsset);
  //           if(foundAsset) {
  //             return <CryptoTicker curAsset={curAsset} foundAsset={foundAsset.baseAsset}/>
  //             // console.log(curAsset+"-----------------CRYPTO TICKER RENDERED------------------"+foundAsset.baseAsset);
  //           }
  //         }
  //       })
  //     }
  //     else {
  //       console.log("in else, no data");
  //       return (<div>"loading"</div>);
  //     }
  //   },
  //   [loadTickers],
  // )

  return (
    <div className="App">
      <Navbar/>

      {/* <div className='ticker-wrapper' style={{height: "100px"}}>
        {renderTicker}
      </div> */}
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
