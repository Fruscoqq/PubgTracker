import React, { useContext } from 'react'
import Rs6Context from '../../context/rs6/Rs6Context';
import { Link } from 'react-router-dom';

const GetUserItem = ({ user }) => {
  const rs6Context = useContext(Rs6Context)
  const { name, rank } = user.attributes;
  const { rankPoints, wins, games, winRatio, averageDamage, kills, killDeathRatio, averageRank } = user.attributes.stats;

  return (
    <div className="card">
      <div className="card-body">
        <Link to={`/Player/LeaderItem/${user.id}`}><h4 className="card-text">Name: {name}</h4></Link>
        <p className="card-text">Chicken Dinner Victories: {wins} </p>
        <p className="card-text">Kills: {kills} </p>
        <p className="card-text">K/D Ratio: {killDeathRatio.toFixed(2)} </p>
        <p className="card-text">Games Played: {games} </p>
        <p className="card-text">Average Damage: {averageDamage} </p>
      </div>
    </div>
  )
}

export default GetUserItem
