import React, { useReducer } from 'react';
import Rs6Reducer from './Rs6Reducer';
import Rs6Context from './Rs6Context';
import axios from 'axios';
import { GET_USERS, SEARCH_USERS, GET_USER, GET_NAME } from '../../types';

const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI4OWNjNmMzMC0xNzk3LTAxMzgtMzc2My03NTczNzdiNTc2MzMiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTc4ODUzODMxLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InNlbnRlcjY0LWdtYWlsIn0.fMX-47NE3KeQNqWj2HwjY6TxEZmdxQ-I5INLHvdKjvE';

const Rs6State = (props) => {
  const initialState = {
    get_users: [],
    get_name: [],
    get_user: {}
  }

  const [state, dispatch] = useReducer(Rs6Reducer, initialState);

  // GET_USERS
  const getUsers = async () => {
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


  return (
    <Rs6Context.Provider value={{
      get_users: state.get_users,
      get_user: state.get_user,
      get_name: state.get_name,
      getUsers,
      getUser,
      getName
    }}>{props.children}
    </Rs6Context.Provider>
  )
}

export default Rs6State;