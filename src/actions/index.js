export const setActualPlayer = payload => {
  return {
    type: 'SET_ACTUAL_PLAYER',
    payload: payload
  }
}

export const setPoints = payload => {
  return {
    type: 'SET_POINTS',
    payload: payload
  }
} 

export const setNewPlayer = payload => {
  return {
    type: 'SET_NEW_PLAYER',
    payload: payload
  }
} 

export const clearActualPlayer = () => {
  return {
    type: 'CLEAR_ACTUAL_PLAYER',
  }
} 