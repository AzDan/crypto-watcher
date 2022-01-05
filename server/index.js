const express = require("express");
const axios = require("axios");
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
    console.log(error);
  });

});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});