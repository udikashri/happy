let localLoggedinUser = null
if (sessionStorage.loggedinUser) localLoggedinUser = JSON.parse(sessionStorage.loggedinUser)

const initialState = {
  loggedInUser: {
    fullname: 'Zack Jordan',
    _id: 'dhoSPowvM'
  },
  users: []
}

export function userReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_USER':
      console.log(state);
      console.log(action);
      return { ...state, loggedInUser: action.user }
    case 'REMOVE_USER':
      console.log(state);
      console.log(action);
      return {
        ...state,
        users: state.users.filter(user => user._id !== action.userId)
      }
    case 'SET_USERS':
      return { ...state, users: action.users }
    case 'SET_SCORE':
      return { ...state, loggedInUser: { ...state.loggedInUser, score: action.score } }
    default:
      return state
  }
}
