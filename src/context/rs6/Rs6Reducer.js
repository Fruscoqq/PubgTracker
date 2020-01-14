import { GET_USERS, SEARCH_USERS, GET_USER, GET_NAME } from '../../types';

export default (state, action) => {
  switch (action.type) {
    // Get Users
    case GET_USERS:
      return ({
        ...state,
        get_users: action.payload
      })
    // Search Users
    // case SEARCH_USERS:
    //   return ({
    //     ...state,
    //     get_users: '',
    //     search_users: action.payload
    //   })
    // Get Single User
    case GET_USER:
      return ({
        ...state,
        search_users: '',
        get_user: action.payload.data.attributes.gameModeStats.solo
      })
    // Get user name
    case GET_NAME:
      return ({
        ...state,
        "get_name": action.payload.data.attributes
      })
    // Default case
    default:
      return state
  }
}