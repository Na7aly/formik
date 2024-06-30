// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { logout } from '../redux/auth/authActions'; // Importă acțiunea logout

// const LogoutButton = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await dispatch(logout()).unwrap(); // Apelul acțiunii de logout din Redux
//       navigate('/login'); // Redirecționează către pagina de login
//     } catch (error) {
//       console.error('Logout failed:', error);
//       // Tratează erorile de logout aici
//     }
//   };

//   return (
//     <button onClick={handleLogout}>Logout</button>
//   );
// };

// export default LogoutButton;
