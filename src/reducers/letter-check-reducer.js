export default (state = false, action) => {
  switch(action.type) {
    case 'CHECK_INCLUSION':
      const { letter, word } = action
      if(word.includes(letter)) {
        return Object.assign({}, state, {
          included: true
        })
      } else {
        return Object.assign({}, state, {
          included: false
        })
      }
    default:
      return state
  }
}

// case 'CHECK_INCLUSION':
//       const { letter } = action
//       if(word.includes(letter)) {
//         return Object.assign({}, state, {
//           included: true
//         })
//       } else {
//         return Object.assign({}, state, {
//           included: false
//         })
//       }