import React from "react";
import logo from './logo.svg';
import './App.css';

function App() {

  const [data, setData] = React.useState(null);
  const [symbol, setSymbol] = React.useState("btcinr");
  const [ticker, setTicker] = React.useState(null);

  React.useEffect(() => {
    fetch("/time")
      .then((res) => res.json())
      .then((data) => {
        setData(JSON.stringify(data))
      });
  }, []);

  React.useEffect(() => {
    fetch(`/ticker/${symbol}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTicker(data);
      });
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {!data ? "loading" : data}
        </p>
        <p>
          {!symbol ? "loading" : symbol}
        </p>
        <p>
          {!ticker ? "loading" : JSON.stringify(ticker)}
        </p>
      </header>
    </div>
  );
}

export default App;
