import React from 'react';
import { Navigate, Outlet, Route, Routes as Switch } from 'react-router-dom';

import Login1 from '../pages/auth/Login';
import Register1 from '../pages/auth/Register';
import App from '../pages/shop/App';

import '../salom.css';

const Routes: React.FC = () => {
  const isAuthenticated = () => {
    const userData = localStorage.getItem('userData') || {};

    console.log(userData);
    return !!userData;
  };

  return (
    <div className="bg">
      <Switch>
        <Route path="" element={isAuthenticated() ? <App /> : <Navigate to="/auth" />} />
        <Route path="auth" element={isAuthenticated()? <App/>  : <Outlet/>}>
          <Route path="login" element={<Login1 />} />
          <Route path="register" element={<Register1 />} />
          <Route path="*" index element={<Register1 />} />
        </Route>


        <Route path="*" element={<Navigate to={isAuthenticated() ? '' : '/auth'} />} />
      </Switch>
    </div>
  );
};

export default Routes;
