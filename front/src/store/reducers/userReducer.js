let localLoggedinUser = null
if (sessionStorage.loggedinUser) localLoggedinUser = JSON.parse(sessionStorage.loggedinUser)

const initialState = {
  loggedInUser: {
    // fullname: 'Claudia Perez',
    // _id: 'bv6phbrTCmj',
    // imgUrl: 'https://res.cloudinary.com/dt1zahrqy/image/upload/v1610610534/hf/faces/19_ne4lby.jpg'
    // _id: 'dhoSPowvM',
    // fullname: 'Zack Jordan',
    // imgUrl: 'https://res.cloudinary.com/dt1zahrqy/image/upload/v1610610534/hf/faces/15_pj1iel.jpg'
    // _id: 'E4G3Ck',
    // fullname: 'Amelia Larson',
    // imgUrl: 'https://res.cloudinary.com/dt1zahrqy/image/upload/v1610610532/hf/faces/3_nz6vkf.jpg'
    _id: 'YjSm4WSQhwbp',
    fullname: 'Jasmine Aleksa',
    imgUrl: 'https://res.cloudinary.com/dt1zahrqy/image/upload/v1610610532/hf/faces/27_zdptgs.jpg'
    // _id: 'Xh9nMze',
    // fullname: 'Richard Horton',
    // imgUrl: 'https://res.cloudinary.com/dt1zahrqy/image/upload/v1610610533/hf/faces/7_gdn9xw.jpg'
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
