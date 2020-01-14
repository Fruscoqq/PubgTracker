import React, { useContext, useState } from 'react';
import Rs6Context from '../../context/rs6/Rs6Context';
import SearchUsers from './SearchUsers';

const Search = () => {
  // Rs6Context
  const rs6Context = useContext(Rs6Context);

  const [text, setText] = useState('');

  // onChange
  const onChange = (e) => {
    setText(e.target.value)
  }

  // onSubmit
  const onSubmit = (e) => {
    e.preventDefault();
    rs6Context.searchUsers(text);
  }
  return (
    <div className="div">
      <form className="form-group" onSubmit={onSubmit}>
        <input type="text" name="text" className="form-control my-3" placeholder="Search Users" onChange={onChange} />
        <input type="submit" value="Search" className="btn btn-dark btn-block" />

      </form>

      <SearchUsers />
    </div>

  )
}

export default Search
