let initialState = {}

const tickersReducer = (state = initialState, action) => {
  switch(action.type) {
      case 'tickers/fetchSuccess':
        return action.payload
    default:
      return state;
  }
}

export default tickersReducer;