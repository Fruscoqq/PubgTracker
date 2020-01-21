import { GET_USERS, SEARCH_USER, GET_USER, GET_NAME, GET_SEARCHED_USER, LOADING } from '../../types';

export default (state, action) => {
  switch (action.type) {
    // Get Users
    case GET_USERS:
      return ({
        ...state,
        get_users: action.payload,
        set_loading: false
      })
    // Search Users
    case SEARCH_USER:
      return ({
        ...state,
        search_user: action.payload.data[0].attributes,
        search_user_id: action.payload.data[0].id,
        set_loading: false
      })
    // Get Single User
    case GET_USER:
      return ({
        ...state,
        search_users: '',
        get_user: action.payload.data.attributes.gameModeStats.solo,
        set_loading: false
      })
    // Get user name
    case GET_NAME:
      return ({
        ...state,
        "get_name": action.payload.data.attributes
      })
    // Get Searched User Data by ID
    case GET_SEARCHED_USER:
      return ({
        ...state,
        get_searched_user_kills: action.payload.data.attributes.gameModeStats,
        get_searched_user: action.payload.data.attributes.gameModeStats.duo,
        set_loading: false
      })
    // Set Loading
    case LOADING:
      return ({
        ...state,
        set_loading: true
      })
    // Default case
    default:
      return state
  }
}