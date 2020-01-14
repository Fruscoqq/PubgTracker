import React from 'react';
import { Link } from 'react-router-dom';

const SearchUsersItem = ({ user: { p_name, p_id } }) => {
  return (
    <div className="card p-1">
      {/* <Link to={`/Player/${p_id}`}>
        <h1>{p_name}</h1>
      </Link> */}
    </div>
  )
}

export default SearchUsersItem
