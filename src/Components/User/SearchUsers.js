import React, { useContext } from 'react';
import SearchUsersItem from './SearchUsersItem';
import Rs6Context from '../../context/rs6/Rs6Context';

const SearchUsers = () => {

  const rs6Context = useContext(Rs6Context);
  return (
    <div>
      {rs6Context.search_users && (rs6Context.search_users.map(user => {
        return (
          <SearchUsersItem user={user} key={user.p_id} />
        )
      }))}
    </div>
  )
}

export default SearchUsers
