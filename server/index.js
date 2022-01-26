const express = require("express");
const axios = require("axios");
const CryptoJS = require("crypto-js");
require('dotenv').config()

const PORT = process.env.PORT || 3001;
const path = require("path");
const { json } = require("express/lib/response");
const app = express();
const key = process.env.API_KEY;
const secret = process.env.API_SECRET;
const host = process.env.API_HOST;

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/time", (req, res) => {
  const uri = `${process.env.API_HOST}/sapi/v1/time`;
  axios.get(uri)
  .then(response => {
    res.json(response.data);
  })
  .catch(error => {
    console.log(error.response.status);
  });
});

app.get("/ticker/:symbol", (req, res) => {
  const uri = `${process.env.API_HOST}/sapi/v1/ticker/24hr?symbol=${req.params.symbol}`;
  axios.get(uri)
  .then(response => res.json(response.data))
  .catch(error => console.log(error));
});

app.get("/alldata", (req, res) => {
  const uri = `${process.env.API_HOST}/sapi/v1/tickers/24hr`;
  axios.get(uri)
  .then(response => res.json(response.data))
  .catch(error => console.log(error));
});

app.get("/getFunds", (req, res) => {
  const time = new Date().getTime();
  const queryString = `recvWindow1=20000&timestamp=${time}`;
  const signature = CryptoJS.HmacSHA256(queryString, process.env.API_SECRET) + '';
  const uri = `${process.env.API_HOST}/sapi/v1/funds?recvWindow1=20000&timestamp=${time}&signature=${signature}`;
  axios.get(uri,{
    headers: {'X-Api-Key': process.env.API_KEY}
  })
  .then(response => res.json(response.data))
  .catch(error => {
    console.log(error.response.status);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});