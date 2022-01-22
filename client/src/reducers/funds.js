let initialState = {}

const fundsReducer = (state = initialState, action) => {
  switch(action.type) {
      case 'funds/fetchSuccess':
        return action.payload
    default:
      return state;
  }
}

export default fundsReducer;