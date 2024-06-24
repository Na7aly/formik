import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './redux/authActions';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = async () => {
    await dispatch(logout()).unwrap();
    navigate('/login');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {user ? (
        <>
          <p>Welcome, {user.username}!</p>
          <button onClick={handleLogout}>Exit</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
