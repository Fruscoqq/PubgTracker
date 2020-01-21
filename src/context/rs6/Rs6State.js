import React, { useReducer } from 'react';
import Rs6Reducer from './Rs6Reducer';
import Rs6Context from './Rs6Context';
import axios from 'axios';
import { GET_USERS, SEARCH_USER, GET_USER, GET_NAME, GET_SEARCHED_USER, LOADING } from '../../types';

const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI4OWNjNmMzMC0xNzk3LTAxMzgtMzc2My03NTczNzdiNTc2MzMiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTc4ODUzODMxLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InNlbnRlcjY0LWdtYWlsIn0.fMX-47NE3KeQNqWj2HwjY6TxEZmdxQ-I5INLHvdKjvE';

const Rs6State = (props) => {
  const initialState = {
    get_users: [],
    get_name: [],
    get_user: {},
    search_user: {},
    get_searched_user: [],
    search_user_id: {},
    get_searched_user_kills: {},
    get_searched_user_deaths: {},
    set_loading: null
  }

  const [state, dispatch] = useReducer(Rs6Reducer, initialState);

  // GET_USERS
  const getUsers = async () => {
    setLoading();
    const options = {
      "headers": {
        "Accept": "application/vnd.api+json",
        "Authorization": `Bearer ${apiKey}`
      }
    }

    const res = await axios.get('https://api.pubg.com/shards/steam/leaderboards/division.bro.official.pc-2018-05/solo?page[number]=$page', options);

    dispatch({
      type: GET_USERS,
      payload: res.data.included
    })
  }

  // Get Single User
  const getUser = async (id) => {
    setLoading();
    const options = {
      "headers": {
        "Accept": "application/vnd.api+json",
        "Authorization": `Bearer ${apiKey}`
      }
    }
    const res = await axios.get(`https://api.pubg.com/shards/steam/players/${id}/seasons/lifetime`, options);

    dispatch({
      type: GET_USER,
      payload: res.data
    })
  }


  // Get username ?..
  const getName = async (id) => {
    const options = {
      "headers": {
        "Accept": "application/vnd.api+json",
        "Authorization": `Bearer ${apiKey}`
      }
    }
    const res = await axios.get(`https://api.pubg.com/shards/steam/players/${id}`, options)

    dispatch({
      type: GET_NAME,
      payload: res.data
    })
  }

  // Seach User
  const searchUser = async (name) => {
    setLoading();
    const options = {
      "headers": {
        "Accept": "application/vnd.api+json",
        "Authorization": `Bearer ${apiKey}`
      }
    }
    const res = await axios.get(`https://api.pubg.com/shards/steam/players?filter[playerNames]=${name}`, options)

    dispatch({
      type: SEARCH_USER,
      payload: res.data
    })
  }

  // Get Searched User Data
  const getSearchedUser = async (id) => {
    setLoading();
    const options = {
      "headers": {
        "Accept": "application/vnd.api+json",
        "Authorization": `Bearer ${apiKey}`
      }
    }
    const res = await axios.get(`https://api.pubg.com/shards/steam/players/${id}/seasons/lifetime`, options)

    dispatch({
      type: GET_SEARCHED_USER,
      payload: res.data
    })
  }

  const setLoading = () => {
    dispatch({
      type: LOADING,
    })
  }


  return (
    <Rs6Context.Provider value={{
      get_users: state.get_users,
      get_user: state.get_user,
      get_name: state.get_name,
      get_searched_user: state.get_searched_user,
      search_user: state.search_user,
      search_user_id: state.search_user_id,
      get_searched_user_kills: state.get_searched_user_kills,
      get_searched_user_deaths: state.get_searched_user_deaths,
      set_loading: state.set_loading,
      getUsers,
      getUser,
      getName,
      searchUser,
      getSearchedUser
    }}>{props.children}
    </Rs6Context.Provider>
  )
}

export default Rs6State;