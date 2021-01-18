import 'assets/css/style.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import MemberRoute from 'components/Routes/MemberRoute';
import GuestRoute from 'components/Routes/GuestRoute';

import Login from 'pages/Login';
import NotFound from 'pages/404';
import Unauthenticated from 'pages/401';
import MyClass from 'pages/MyClass';
import Register from 'pages/Register';
import Joined from 'pages/Joined';

import { setAuthorizationHeader } from 'configs/axios';
import { populateProfile } from 'store/actions/users';

import users from 'constants/api/users';

function App() {
  const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });
  const dispatch = useDispatch();

  useEffect(() => {
    let session = null;
    if (localStorage.getItem('BWAMICRO:token')) {
      session = JSON.parse(localStorage.getItem('BWAMICRO:token'));
      setAuthorizationHeader(session.token);
    }

    users.details().then((details) => {
      dispatch(populateProfile(details.data));
    });
  }, [dispatch]);

  return (
    <>
      <Router history={history}>
        <Switch>
          <GuestRoute path="/login" component={Login}></GuestRoute>
          <GuestRoute path="/register" component={Register}></GuestRoute>
          <GuestRoute path="/private" component={Unauthenticated}></GuestRoute>
          <MemberRoute exact path="/" component={MyClass}></MemberRoute>
          <MemberRoute
            exact
            path="/joined/:class"
            component={Joined}
          ></MemberRoute>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
