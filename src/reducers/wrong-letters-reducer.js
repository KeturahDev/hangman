export default (state={}, action) => {
  const { letter } = action
  switch(action.type) {
    case "ADD_LETTER":
      return Object.assign({}, state, {
        [letter]: letter
      })
    default:
      return state
  }
}