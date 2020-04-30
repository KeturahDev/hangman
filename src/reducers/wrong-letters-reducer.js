export default (state={}, action) => {
  const { letter, id } = action
  switch(action.type) {
    case "ADD_LETTER":
      return Object.assign({}, state, {
        [id]: {
          letter: letter,
          id: id
        }
      });
    default:
      return state
  }
}
// export default (state = {}, action) => {
//   switch (action.type) {
//   case 'ADD_TICKET':
//     const { names, location, issue, id } = action;
//     return Object.assign({}, state, {
//       [id]: {
//         names: names,
//         location: location,
//         issue: issue,
//         id: id
//       }
//     });
//   default:
//     return state;
//   }
// };