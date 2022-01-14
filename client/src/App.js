import React, { useCallback } from "react";
import { render } from "react-dom";
import './App.css';
import CryptoTicker from "./CryptoTicker";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from 'react-redux';
import { getServerTime } from "./actions";

function App() {

  const serverTime = useSelector(state => state.server.serverTime);
  const dispatch = useDispatch();

  const [symbol, setSymbol] = React.useState("btcinr");
  const [ticker, setTicker] = React.useState(null);
  const [allValues, setAllValues] = React.useState([]);
  const [assets, setAssets] = React.useState([]);
  const [loadTickers, setLoadTickers] = React.useState(false);

  
  const getCurrentCryptoValue = useCallback(
    () => {
      fetch(`/ticker/${symbol}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTicker(data);
      });
    },
    [symbol],
  );
  
  const getAllCryptoValues = useCallback(
    () => {
      fetch(`/alldata`)
      .then((res) => res.json())
      .then((data) => {
        data.map((element, index) => {
          setAllValues(prevArray => [...prevArray, element]);
        })
      });
    },
    [],
  );

  const getFunds = useCallback(
    () => {
      fetch('/getFunds')
      .then((res) => res.json())
      .then((data) => {
        data.map((element, index) => {
          if(element.free > 0) {
            setAssets(lastArray => [...lastArray, {
              asset: element.asset,
              free: element.free,
              locked: element.locked
            }]
            )
          }
        })
      })
    },
    [],
  )

  const renderTicker = useCallback(
    () => {
      if((allValues.length > 0) && (assets.length > 0)) {
        assets.map((element, index) => {
          let curAsset = element.asset;
          if(curAsset != "inr") {
            let foundAsset = allValues.find(({ baseAsset }) => baseAsset == curAsset);
            if(foundAsset) {
              return <CryptoTicker curAsset={curAsset} foundAsset={foundAsset.baseAsset}/>
              // console.log(curAsset+"-----------------CRYPTO TICKER RENDERED------------------"+foundAsset.baseAsset);
            }
          }
        })
      }
      else {
        console.log("in else, no data");
        return (<div>"loading"</div>);
      }
    },
    [loadTickers],
  )

  const getTickers = useCallback(
    () => {
      setLoadTickers(true)
    },
    [],
  )

  return (
    <div className="App">
      <Navbar/>

      <div className='ticker-wrapper' style={{height: "100px"}}>
        {renderTicker}
      </div>
      <button type="button" onClick={getTickers}>LOAD TICKERS</button><br/>
      <button type="button" onClick={() => dispatch(getServerTime())}>Get Time</button>
      <p>
        {!serverTime ? "loading" : serverTime}
      </p>
      <button onClick={getCurrentCryptoValue}>Get Current Crypto</button>
      <p>
        {!symbol ? "loading" : symbol}
      </p>
      <button onClick={getAllCryptoValues}>Get all values</button>
      <p>
        {!ticker ? "loading" : JSON.stringify(ticker)}
      </p>
      <button onClick={getFunds}>Get Funds</button>
    </div>
  );
}

export default App;
