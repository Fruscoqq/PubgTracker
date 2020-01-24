import React, { useContext, useEffect } from 'react';
import GetUserItem from './GetUserItem';
import Rs6Context from '../../context/rs6/Rs6Context';
import Spinner from '../../images/spinner.gif'


const GetUsers = () => {

  // Bringing in Context
  const rs6Context = useContext(Rs6Context);

  // useEffect 
  useEffect(() => {
    rs6Context.getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  let contextArr = rs6Context.get_users;
  let leaderArr = [];

  contextArr.map(curr => {
    if (curr.attributes.rank <= 100) {
      leaderArr.push(curr)
      leaderArr.sort((a, b) => a.attributes.rank - b.attributes.rank)
    }
  })

  return (
    <div className="text-center bg-info my-5 cardParent">
      <div className="card-body">
        <div className="row">
          <div className="col-1">Rank</div>
          <div className="col-2">Username</div>
          <div className="col-2">Wins</div>
          <div className="col-1">Games</div>
          <div className="col-2">K/D</div>
          <div className="col-2">Avg Damage</div>
          <div className="col-2">Win Ratio</div>
        </div>
      </div>
      <div style={userStyle} className="py-3 text-center demoParent">
        <div className="demo">
          {
            Object.keys(leaderArr).map(key => {
              return (
                <GetUserItem user={leaderArr[key]} key={leaderArr[key].attributes.rank} />
              )
            })
          }
        </div>
      </div>
    </div>

  )
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: '1rem'
}

export default GetUsers
