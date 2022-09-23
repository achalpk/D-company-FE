import React, { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/home';
import Profile from './Pages/profile';
import PrivateRoute from './Pages/privateroute';
import Login from './components/login/login';
import Landing from './Pages/landing';
import Feedback from './Pages/feedback';
import {Provider} from 'react-redux';
import store from './redux/store';
import Employees from './Pages/employees/employees';
import Signup from './components/login/signup';

function App() {
  return (
    <Provider store={store}>
      <div className='app'>
        <BrowserRouter>
          <Switch>
            <PrivateRoute exact path='/'><Home/></PrivateRoute>
            <PrivateRoute path='/home/:name'><Landing/></PrivateRoute>
            <PrivateRoute path='/profile'><Profile/></PrivateRoute>
            <PrivateRoute path='/feedback'><Feedback/></PrivateRoute>
            <PrivateRoute path='/employees'><Employees/></PrivateRoute>
            <Route path='/signup'><Signup/></Route>
            <Route path='/login'><Login/></Route>
            <Route path='*'><h1>404 error - Page not found</h1></Route>
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
