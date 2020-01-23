import React, { Fragment } from 'react';
import Rs6State from './context/rs6/Rs6State';
import Navbar from './Components/Layout/Navbar';
import GetUsers from './Components/User/GetUsers';
import Search from './Components/User/Search';
import User from './Components/User/User';
import LeaderUserItem from './Components/User/LeaderUserItem';
import Spinner from './Components/Layout/Spinner';
import Overlay from './Components/Layout/Overlay';
import Footer from './Components/Layout/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Rs6State>
        <div className="App">
          <Overlay />
          <Navbar />
          <div className="container">
            <Route exact path="/" component={Search} />
            <Route exact path="/Player/Leaderboard" component={GetUsers} />
            <Spinner />
            <Route exact path="/Player/Stats" component={User} />
            <Switch>
              <Route exact path="/Player/LeaderItem/:id" render={props => (
                <LeaderUserItem {...props} />
              )} />
            </Switch>
            <Footer />
          </div>
        </div>
      </Rs6State>
    </Router>
  );
}

export default App;
