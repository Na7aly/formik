// Dashboard.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LogoutButton from './LogoutButton/LogoutButton'; // Verifică calea corectă către componenta LogoutButton
import { logout } from './redux/auth/authActions'; // Verifică calea corectă către funcția logout

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = async () => {
    try {
      await dispatch(logout());
      navigate('/login'); // Redirecționează după logout către pagina de login
    } catch (error) {
      console.error('Logout failed:', error);
      // Poți trata erorile de logout aici
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {user ? (
        <>
          <p>Welcome, {user.username}!</p>
          <LogoutButton /> {/* Adaugă butonul de logout */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
