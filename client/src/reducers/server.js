let initialState = {
  serverTime: 0,
  status: 'normal'
}

const serverReducer = (state = initialState, action) => {
  switch(action.type) {
    // case 'server/getTime':
    //   return {
    //     ...state,
    //     serverTime: action.payload
    //   }
      case 'server/fetchTime':
      return {
        ...state,
        serverTime: action.payload
      }
      case 'server/fetchSuccess':
      return {
        ...state,
        serverTime: action.payload
      }
    default:
      return state;
  }
}

export default serverReducer;