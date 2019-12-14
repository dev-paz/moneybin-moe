import React from 'react';
import HomeScreen from './components/home_screen/HomeScreen';
import LoginPage from './components/auth/LoginPage'
import ProtectedRoute from './components/auth/ProtectedRoute'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation
} from "react-router-dom";

class App extends React.Component{


render() {
  return (
  <Router>
    <Switch>
      <Route path="/login" component={LoginPage} />
         <ProtectedRoute path="/home" component={HomeScreen}/>
    </Switch>
  </Router>
  );
}

}

export default App;
