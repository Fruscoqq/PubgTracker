import React, { useContext } from 'react';
import Rs6Context from '../../context/rs6/Rs6Context';
import { Link } from 'react-router-dom';
import Spinner from '../../images/spinner.gif';

const GetUserItem = ({ user }) => {
  const { name, rank } = user.attributes;
  let { wins, games, averageDamage, kills, killDeathRatio, winRatio } = user.attributes.stats;

  const rs6Context = useContext(Rs6Context);

  const losses = games - wins;
  winRatio = (winRatio * 100).toFixed(1);

  const barProgress = {
    width: `${winRatio}%`,
  }

  return (
    (rank % 2) === 0 ? (<div className="card-body bg-dark">
      <div className="row">
        <div className="col-1">
          <p className="card-text">{rank}</p>
        </div>
        <div className="col-2">
          <Link to={`/Player/LeaderItem/${user.id}`}><h4 className="card-text">{name}</h4></Link>
        </div>
        <div className="col-2"><p className="card-text">{wins} </p></div>
        <div className="col-2"><p className="card-text">{games} </p></div>
        <div className="col-1"><p className="card-text">{killDeathRatio.toFixed(2)} </p></div>
        <div className="col-2"> <p className="card-text">{averageDamage} </p></div>
        <div className="col-2"><div class="progress">
          <div class="progress-bar" role="progressbar" aria-valuenow="70"
            aria-valuemin="0" aria-valuemax="1" style={barProgress}>
          </div>
        </div>
        </div>
      </div>
    </div>) : (<div className="card-body bg-white">
      <div className="row">
        <div className="col-1">
          <p className="card-text">{rank}</p>
        </div>
        <div className="col-2">
          <Link to={`/Player/LeaderItem/${user.id}`}><h4 className="card-text">{name}</h4></Link>
        </div>
        <div className="col-2"><p className="card-text">{wins} </p></div>
        <div className="col-2"><p className="card-text">{games} </p></div>
        <div className="col-1"><p className="card-text">{killDeathRatio.toFixed(2)} </p></div>
        <div className="col-2"> <p className="card-text">{averageDamage} </p></div>
        <div className="col-2"><div class="progress">
          <div class="progress-bar" role="progressbar" aria-valuenow="70"
            aria-valuemin="0" aria-valuemax="1" style={barProgress}>
          </div>
        </div>
        </div>
      </div>
    </div>)
  )
}

export default GetUserItem
