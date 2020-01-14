import React, { useContext, useEffect } from 'react';
import Rs6Context from '../../context/rs6/Rs6Context';
import { Link } from 'react-router-dom';

const User = ({ match }) => {

  const rs6Context = useContext(Rs6Context);
  useEffect(() => {
    // rs6Context.getUser(match.params.p_id)
  }, [])



  // setTimeout(() => {
  //   rs6Context.get_user.matches.map(curr => {
  //     console.log(curr.next);
  //   })
  // }, 3000)



  return (
    <div>
      <Link to="/" className="btn btn-dark my-3">Back to search</Link>

    </div>
  )
}

export default User
