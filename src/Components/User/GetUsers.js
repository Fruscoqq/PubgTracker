import React, { useContext, useEffect } from 'react';
import GetUserItem from './GetUserItem';
import Rs6Context from '../../context/rs6/Rs6Context';
import axios from 'axios';


const GetUsers = () => {

  // Bringing in Context
  const rs6Context = useContext(Rs6Context);

  // useEffect 
  useEffect(() => {
    rs6Context.getUsers();
  }, [])


  return (
    <div style={userStyle} className="py-3 text-center">
      {
        Object.keys(rs6Context.get_users).map(key => {
          return (
            <GetUserItem user={rs6Context.get_users[key]} key={rs6Context.get_users[key].id} />
          )
        })
      }
    </div>
  )
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1rem'
}

export default GetUsers
