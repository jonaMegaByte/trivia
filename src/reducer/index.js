const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_ACTUAL_PLAYER':
      return {
        ...state,
        actualPlayer: action.payload
      }
    case 'SET_POINTS':
      return {
        ...state,
        actualPlayer: {...state.actualPlayer, points: action.payload}
      }
    case 'SET_NEW_PLAYER':
      return {
        ...state,
        allPlayers: [...state.allPlayers, action.payload]
      }
    case 'CLEAR_ACTUAL_PLAYER':
      return {
        ...state,
        actualPlayer: {}
      }
    default:
      return state
  }
}

export default reducer