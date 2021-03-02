const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_ACTUAL_PLAYER':
      return {
        ...state,
        actualPlayer: action.payload
      }
    default:
      return state
  }
}

export default reducer