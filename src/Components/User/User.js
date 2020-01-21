import React, { useContext, useEffect } from 'react';
import Rs6Context from '../../context/rs6/Rs6Context';

const User = () => {

  const rs6Context = useContext(Rs6Context);

  useEffect(() => {
    rs6Context.getSearchedUser(rs6Context.search_user_id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { name } = rs6Context.search_user;

  // const { assists, boosts, dailyWins, damageDealt, days, headshotKills, heals, kills, longestKill, longestTimeSurvived, losses, maxKillStreaks, roadKills, rideDistance, suicides, teamKills, top10s, wins } = rs6Context.get_searched_user;


  let totalKills = 0;
  let totalDeaths = 0;
  let totalAssists = 0,
    totalBoosts = 0,
    totalDamageDealt = 0,
    totalDays = 0,
    totalHeadshotKills = 0,
    totalHeals = 0,
    totalRoadKills = 0,
    totalRideDistance = 0,
    totalSuicides = 0,
    totalTeamKills = 0,
    totalTop10s = 0,
    totalWins = 0,
    totalDailyWins = 0,
    totalMaxKillStreak = 0,
    totalLongestTimeSurvived = 0,
    totalLongestKill = 0,
    totalRevives = 0,
    killStreakArr = [],
    timeArr = [],
    longestKillArr = [],
    rideDistanceArr = [],
    totalTopArr = [],
    totalRevivesArr = [];




  rs6Context.get_searched_user !== '' && (
    Object.values(rs6Context.get_searched_user_kills).map(curr => {
      totalKills += curr.kills;
      totalDeaths += curr.losses;
      totalAssists += curr.assists;
      totalBoosts += curr.boosts;
      totalDamageDealt += curr.damageDealt;
      totalDays += curr.days;
      totalHeals += curr.heals;
      totalHeadshotKills += curr.headshotKills;
      totalDailyWins += curr.dailyWins;
      totalWins += curr.wins;
      totalRoadKills += curr.roadKills;
      totalSuicides += curr.suicides;
      totalTeamKills += curr.teamKills;

      killStreakArr.push(curr.maxKillStreaks);
      totalMaxKillStreak = Math.max(...killStreakArr);

      timeArr.push(curr.longestTimeSurvived);
      totalLongestTimeSurvived = Math.max(...timeArr);

      longestKillArr.push(curr.longestKill);
      totalLongestKill = Math.max(...longestKillArr);

      rideDistanceArr.push(curr.rideDistance);
      totalRideDistance = Math.max(...rideDistanceArr);

      totalTopArr.push(curr.top10s);
      totalTop10s = Math.max(...totalTopArr);

      totalRevivesArr.push(curr.revives);
      totalRevives = Math.max(...totalRevivesArr);

    })
  )

  // let totalDeaths = 0;
  // {
  //   rs6Context.get_searched_user !== '' && (
  //     Object.values(rs6Context.get_searched_user_kills)
  //   )
  // }
  return (
    rs6Context.set_loading !== true && (
      <div>
        <h4 className="display-4 font-weight-normal py-3 my-text-light bg-dark">{name}
        </h4>
        <p className="display-4">K/D {(totalKills / totalDeaths).toFixed(1)}</p>
        <div className="stats-container my-4">
          <div className="row text-center bg-danger ">
            {/* COL1 */}
            <div className="col-4 ">
              <div className="row bg-danger pt-5">
                <div className="col-6 py-3">
                  <p className="lead">Kills</p>
                  <h4><i className="fas fa-crosshairs"></i> {totalKills}</h4>
                </div>
                <div className="col-6 py-3">
                  <p className="lead">Assists</p>
                  <h4><i className="fas fa-hands-helping" /> {totalAssists}</h4>
                </div>
              </div>
              <div className="row bg-danger pb-5">
                <div className="col-6 py-3">
                  <p className="lead">Chicken Dinners</p>
                  <h4><i className="fas fa-drumstick-bite" /> {totalWins}</h4>
                </div>
                <div className="col-6 py-3">
                  <p className="lead">Top 10's</p>
                  <h4><i className="fas fa-award"></i> {totalTop10s}</h4>
                </div>
              </div>
            </div>
            {/* COL 2 */}
            <div className="col-4 bg-info py-5">
              <div className="upper py-3">
                <h4>Days Played</h4>
                <p className="lead "><i className="fas fa-clock"></i> {totalDays}</p>
              </div>
              <div className="lower py-3">
                <p className="lead ">Longest Time Survided</p>
                <h3><i className="fas fa-stopwatch"></i> {(totalLongestTimeSurvived / 60).toFixed(2)} minutes</h3>
              </div>
            </div>
            <div className="col-4 bg-light py-5">
              <div className="upper py-3">
                <h4>Boosts Used</h4>
                <p className="lead"><i className="fas fa-bolt"></i> {totalBoosts}</p>
              </div>
              <div className="lower py-3">
                <h4>Wounds Healed</h4>
                <p className="lead"><i className="fas fa-first-aid"></i> {totalHeals}</p>
              </div>
            </div>
          </div>
          {/* Row 2 */}
          <div className="row text-center">
            <div className="col-4 bg-primary py-5 align-items-center">
              <h4 className="py-3">Damage Dealt</h4>
              <p className="display-4"><i className="fas fa-house-damage" /> {(totalDamageDealt / 1000).toFixed(1)}k</p>
            </div>
            <div className="col-8 py-1 bg-warning">
              <div className="row">
                <div className="col-12">
                  <h4 className="py-3">Headshot Kills</h4>
                  <p className="display-4"><i className="fas fa-bullseye" /> {totalHeadshotKills}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <h4 className="py-3">Max Killstreak</h4>
                  <p className="display-4"><i className="fas fa-skull" /> {totalMaxKillStreak}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-6 bg-light py-5">
              <h4 className="py-3">Daily Wins</h4>
              <p className="display-4"><i className="fas fa-trophy"></i> {totalDailyWins}</p>
            </div>
            <div className="col-6 bg-dark py-5">
              <h4 className="py-3">Longest Kill</h4>
              <p className="display-4"><i className="fas fa-ruler-vertical"></i> {totalLongestKill.toFixed(1)}</p>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-2 bg-danger py-5">
              <h4 className="py-3">Road Kills</h4>
              <p className="display-4"><i className="fas fa-car-crash"></i> {totalRoadKills}</p>
            </div>
            <div className="col-2 bg-danger py-5">
              <h4 className="py-3">Revives</h4>
              <p className="display-4"><i className="fas fa-hands-helping"></i> {totalRevives}</p>
            </div>
            <div className="col-4 bg-danger py-5">
              <h4 className="py-3">Ride Distance</h4>
              <p className="display-4"><i className="fas fa-ruler"></i> {(totalRideDistance / 1000).toFixed(1)} km</p>
            </div>
            <div className="col-2 bg-danger py-5">
              <h4 className="py-3">Suicides</h4>
              <p className="display-4"><i className="fas fa-procedures"></i> {totalSuicides}</p>
            </div>
            <div className="col-2 bg-danger py-5">
              <h4 className="py-3">Team Kills</h4>
              <p className="display-4"><i className="fas fa-ambulance"></i> {totalTeamKills}</p>
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export default User
