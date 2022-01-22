// Action to signify that the fetch process is underway 
const fetchServerTime = () => {
  return {
    type: 'server/fetchTime',
    payload: 'LOADING'
  }
}

// Action to signify the fetch process was successful
const fetchServerTimeSuccess = (time) => {
  return {
    type: 'server/fetchSuccess',
    payload: time
  }
}

// Action to get server time from the API (thunk)
export const getServerTime = () => async dispatch => {
  dispatch(fetchServerTime())
  fetch("/time")
    .then(res => res.json())
    .then(data => dispatch(fetchServerTimeSuccess(data.serverTime)))
}

//-------------------------------------------------------------------

const cryptoFetchSuccess = (data) => {
  return {
    type: 'crypto/cryptoFetchSuccess',
    payload: data
  }
}

export const getCurrentCryptoInfo = (currentCrypto) => async dispatch => {
  fetch(`/ticker/${currentCrypto}`)
    .then(res => res.json())
    .then(data => dispatch(cryptoFetchSuccess(data)))
}

//-------------------------------------------------------------------
const getTickersSuccess = (data) => {
  return {
    type: 'tickers/fetchSuccess',
    payload: data
  }
}

export const getTickers = () => async dispatch => {
  fetch("/alldata")
    .then(res => res.json())
    .then(data => dispatch(getTickersSuccess(data)))
}

//-------------------------------------------------------------------
const getFundsSuccess = (data) => {
  return {
    type: 'funds/fetchSuccess',
    payload: data
  }
}

export const getFunds = () => async dispatch => {
  fetch("/getFunds")
    .then(res => res.json())
    .then(data => dispatch(getFundsSuccess(data)))
}