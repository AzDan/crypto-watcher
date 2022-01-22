let initialState = {
  currentSymbol: 'btcinr',
  data: ''
}

const cryptoReducer = (state = initialState, action) => {
  switch(action.type) {
      case 'crypto/cryptoFetchSuccess':
        return {
          ...state,
          data: action.payload
        }
    default:
      return state;
  }
}

export default cryptoReducer;