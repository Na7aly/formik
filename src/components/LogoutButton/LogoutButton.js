// LogoutButton.js

import React from 'react';
import { useDispatch } from 'react-redux';
import logout from './logout'; // Importă funcția logout

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await logout(); // Apelul funcției de logout care include token-ul JWT
      // Poți redirecționa aici spre pagina de login sau unde dorești după logout
    } catch (error) {
      console.error('Logout failed:', error);
      // Tratează erorile de logout aici
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
