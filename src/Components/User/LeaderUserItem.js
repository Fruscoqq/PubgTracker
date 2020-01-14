import React, { useContext, useEffect } from 'react';
import Rs6Context from '../../context/rs6/Rs6Context';

const LeaderUserItem = ({ match }) => {
  const rs6Context = useContext(Rs6Context);
  useEffect(() => {
    rs6Context.getUser(match.params.id)
    rs6Context.getName(match.params.id)
  }, [])

  const { assists, boosts, dailyWins, damageDealt, days, headshotKills, heals, kills, longestKill, longestTimeSurvived, losses, maxKillStreak, roadKills, rideDistance, suicides, teamKills, top10s, wins } = rs6Context.get_user;

  const { name } = rs6Context.get_name;

  return (
    <div>
      <h1>{name}</h1>
      <h4>Assists: {assists}</h4>
      <p>Kills: {kills}</p>
    </div>
  )
}

export default LeaderUserItem
