import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken'



const App = () => {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Alert />
          <Routes>
            <Route exact path='' element={<Landing />} />
            <Route exact path='register' element={<Register />} />
            <Route exact path='login' element={<Login />} />
            <Route exact path='dashboard' element={<PrivateRoute component={Dashboard} />} />
          </Routes>
        </Fragment>
      </Router>
    </Provider>
  )
};


export default App;
