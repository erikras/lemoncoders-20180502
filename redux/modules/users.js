const LOAD_USERS = 'lemon-coders/users/LOAD'
const SET_USER = 'lemon-coders/users/SET_USER'
const LOAD_USERS_SUCCESS = 'lemon-coders/users/LOAD_USERS_SUCCESS'
const LOAD_USERS_FAILURE = 'lemon-coders/users/LOAD_USERS_FAILURE'

export default function reducer(state = {}, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user
      }
    case LOAD_USERS:
      return {
        ...state,
        loading: true
      }
    case LOAD_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.result
      }
    case LOAD_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}

// Action Creators
export function loadUsers() {
  return {
    types: [LOAD_USERS, LOAD_USERS_SUCCESS, LOAD_USERS_FAILURE],
    promise: client => client.get('/loadUsers')
  }
}
export function setUser(user) {
  return { type: SET_USER, user }
}

// Selectors
export const getUsers = state => state.users.users
