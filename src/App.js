import React from 'react';
import Rs6State from './context/rs6/Rs6State';
import Navbar from './Components/Layout/Navbar';
import GetUsers from './Components/User/GetUsers';
import Search from './Components/User/Search';
import User from './Components/User/User';
import LeaderUserItem from './Components/User/LeaderUserItem';
import SearchUsers from './Components/User/SearchUsers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Rs6State>
        <div className="App">
          <Navbar />
          <div className="container">
            <Route exact path="/" component={Search} />
            <Route exact path="/Player/Leaderboard" component={GetUsers} />
            <Switch>
              {/* <Route exact path="/Player/:p_id" render={props => (
                <User {...props} />
              )} /> */}
              <Route exact path="/Player/LeaderItem/:id" render={props => (
                <LeaderUserItem {...props} />
              )} />
            </Switch>
          </div>
        </div>
      </Rs6State>
    </Router>
  );
}

export default App;
