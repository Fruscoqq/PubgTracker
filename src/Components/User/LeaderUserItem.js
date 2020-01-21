import React, { useContext, useEffect } from 'react';
import Rs6Context from '../../context/rs6/Rs6Context';

const LeaderUserItem = ({ match }) => {
  const rs6Context = useContext(Rs6Context);
  useEffect(() => {
    rs6Context.getUser(match.params.id)
    rs6Context.getName(match.params.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { assists, boosts, dailyWins, damageDealt, days, headshotKills, heals, kills, longestKill, longestTimeSurvived, losses, maxKillStreaks, roadKills, rideDistance, suicides, teamKills, top10s, wins } = rs6Context.get_user;

  const { name } = rs6Context.get_name;

  return (
    rs6Context.set_loading !== true && (
      <div>
        <h3 className="text-light pb-4 pt-3">{name} - <span className="lead">lifetime stats</span></h3>
        <div className="stats-container my-4">
          <div className="row text-center bg-primary rounded">
            {/* COL1 */}
            <div className="col-4 ">
              <div className="row bg-danger py-5">
                <div className="col-6 py-3">
                  <p className="lead">Kills</p>
                  <h4><i className="fas fa-crosshairs"></i> {kills}</h4>
                </div>
                <div className="col-6 py-3">
                  <p className="lead">Assists</p>
                  <h4><i className="fas fa-hands-helping" /> {assists}</h4>
                </div>
              </div>
              <div className="row bg-danger pb-5">
                <div className="col-6 py-3">
                  <p className="lead">Chicken Dinners</p>
                  <h4><i className="fas fa-drumstick-bite" /> {wins}</h4>
                </div>
                <div className="col-6 py-3">
                  <p className="lead">Top 10's</p>
                  <h4><i className="fas fa-award"></i> {top10s}</h4>
                </div>
              </div>
            </div>
            {/* COL 2 */}
            <div className="col-4 bg-info py-5">
              <div className="upper py-3">
                <h4>Days Played</h4>
                <p className="lead "><i className="fas fa-clock"></i> {days}</p>
              </div>
              <div className="lower py-3">
                <p className="lead ">Longest Time Survided</p>
                <h3><i className="fas fa-stopwatch"></i> {(longestTimeSurvived / 60).toFixed(2)} minutes</h3>
              </div>
            </div>
            <div className="col-4 bg-light py-5">
              <div className="upper py-3">
                <h4>Boosts Used</h4>
                <p className="lead"><i className="fas fa-bolt"></i> {boosts}</p>
              </div>
              <div className="lower py-3">
                <h4>Wounds Healed</h4>
                <p className="lead"><i className="fas fa-first-aid"></i> {heals}</p>
              </div>
            </div>
          </div>
          {/* Row 2 */}
          <div className="row text-center">
            <div className="col-4 bg-primary py-5 align-items-center">
              <h4 className="py-3">Damage Dealt</h4>
              <p className="display-4"><i className="fas fa-house-damage" /> {(damageDealt / 1000).toFixed(1)}k</p>
            </div>
            <div className="col-8 py-1 bg-warning">
              <div className="row">
                <div className="col-12">
                  <h4 className="py-3">Headshot Kills</h4>
                  <p className="display-4"><i className="fas fa-bullseye" /> {headshotKills}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <h4 className="py-3">Max Killstreak</h4>
                  <p className="display-4"><i className="fas fa-skull" /> {maxKillStreaks}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-6 bg-light py-5">
              <h4 className="py-3">Daily Wins</h4>
              <p className="display-4"><i className="fas fa-trophy"></i> {dailyWins}</p>
            </div>
            <div className="col-6 bg-dark py-5">
              <h4 className="py-3">Longest Kill</h4>
              <p className="display-4"><i className="fas fa-ruler-vertical"></i> {Math.round(longestKill)}m</p>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-2 bg-danger py-5">
              <h4 className="py-3">Road Kills</h4>
              <p className="display-4"><i className="fas fa-car-crash"></i> {roadKills}</p>
            </div>
            <div className="col-2 bg-danger py-5">
              <h4 className="py-3">Losses</h4>
              <p className="display-4"><i className="fas fa-tint"></i> {losses}</p>
            </div>
            <div className="col-4 bg-danger py-5">
              <h4 className="py-3">Ride Distance</h4>
              <p className="display-4"><i className="fas fa-ruler"></i> {(rideDistance / 1000).toFixed(1)} km</p>
            </div>
            <div className="col-2 bg-danger py-5">
              <h4 className="py-3">Suicides</h4>
              <p className="display-4"><i className="fas fa-procedures"></i> {suicides}</p>
            </div>
            <div className="col-2 bg-danger py-5">
              <h4 className="py-3">Team Kills</h4>
              <p className="display-4"><i className="fas fa-ambulance"></i> {teamKills}</p>
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export default LeaderUserItem
