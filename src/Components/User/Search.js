import React, { useContext, useState } from 'react';
import Rs6Context from '../../context/rs6/Rs6Context';


const Search = (props) => {
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
    if (text !== '') {
      rs6Context.searchUser(text);
      setTimeout(() => {
        props.history.push('/Player/Stats')
      }, 1000)
    }
  }

  return (
    <div className="div search">
      <form className="form-group mx-3" onSubmit={onSubmit}>
        <div className="searchText text-center text-uppercase text-light">
          <h1>Check your PUBG stats</h1>
          <h1><span>fast</span> and <span>easy</span></h1>
        </div>
        <input type="text" name="text" className="form-control my-3 searchInput" placeholder="Search Users" onChange={onChange} />
        <input type="submit" value="Search" className="btn btn-primary btn-block searchBtn" />
      </form>
      {/* <SearchUsers /> */}
    </div>

  )
}

export default Search
