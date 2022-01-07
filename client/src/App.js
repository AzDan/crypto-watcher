import React, { useCallback } from "react";
import logo from './logo.svg';
import './App.css';

function App() {

  const [data, setData] = React.useState(0);
  const [symbol, setSymbol] = React.useState("btcinr");
  const [ticker, setTicker] = React.useState(null);
  const [allValues, setAllValues] = React.useState([]);

  const getTime = useCallback(
    () => {
      fetch("/time")
      .then((res) => res.json())
      .then((data) => {
        setData(data.serverTime)
      });
    },
    [],
  );
  
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
        console.log(data);
        setAllValues(data);
      });
    },
    [],
  );

  const getFunds = useCallback(
    () => {
      fetch('/getFunds')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
    },
    [],
  )

  return (
    <div className="App">
      <button type="button" onClick={getTime}>Get Time</button>
      <p>
        {!data ? "loading" : data}
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
