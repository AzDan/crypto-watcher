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