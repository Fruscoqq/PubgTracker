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
    rs6Context.searchUser(text);
    setTimeout(() => {
      props.history.push('/Player/Stats')
    }, 1000)
  }

  return (
    <div className="div">
      <form className="form-group" onSubmit={onSubmit}>
        <input type="text" name="text" className="form-control my-3" placeholder="Search Users" onChange={onChange} />
        <input type="submit" value="Search" className="btn btn-dark btn-block" />
      </form>
      {/* <SearchUsers /> */}
    </div>

  )
}

export default Search
