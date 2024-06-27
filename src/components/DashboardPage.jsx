import styles from './Login/Login.module.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LogoutButton from './LogoutButton/LogoutButton'; // Verifică calea corectă către componenta LogoutButton
import { logout } from './redux/auth/authActions';

function DashboardPage() {
  // Obține utilizatorul curent din starea Redux
  const user = useSelector((state) => state.auth.user);

  return (
    <div className={styles.homeContainer}>
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

      <div className={styles.leftSide}>
        {/* Aici poți reintroduce componentele Navigation, Balance și Currency */}
        {/* <Navigation />
        <Balance />
        <Currency /> */}
      </div>
      <div className={styles.rightSide}>
        {/* Aici poți reintroduce componentele Home și Outlet */}
        {/* <Home />
        <Outlet /> */}
      </div>
    </div>
  );
}

export default DashboardPage;
