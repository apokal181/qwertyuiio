import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRoutes } from './routes';
import { useAuth } from './hooks/auth.hook'
import {AuthContext} from './context/AuthContext'






function App() {
  const {token, login, logout, userId} = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)
  return (
      <AuthContext.Provider value={{
        token, login, logout, userId, isAuthenticated
      }}>
      <Router>
        <div className="container">
        {routes}
        </div>
      </Router>
      </AuthContext.Provider>
  );
}

export default App;
