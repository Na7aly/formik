import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from './redux/authActions'; // Asigură-te că importul este corect

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.auth.error);

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required'),
      repeatPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Repeat Password is required'),
    }),
    onSubmit: async (values) => {
      const { username, email, password } = values;
      const resultAction = await dispatch(registerUser({ username, email, password }));
      if (registerUser.fulfilled.match(resultAction)) {
        navigate('/login');
      }
    },
  });

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" {...formik.getFieldProps('username')} />
          {formik.touched.username && formik.errors.username ? (
            <div>{formik.errors.username}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" {...formik.getFieldProps('email')} />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" {...formik.getFieldProps('password')} />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="repeatPassword">Repeat Password</label>
          <input id="repeatPassword" type="password" {...formik.getFieldProps('repeatPassword')} />
          {formik.touched.repeatPassword && formik.errors.repeatPassword ? (
            <div>{formik.errors.repeatPassword}</div>
          ) : null}
        </div>

        {error && <div style={{ color: 'red' }}>{error}</div>}

        <button type="submit">Register</button>
      </form>
      <div>
        <p>Already have an account? <Link to="/login">Login here</Link></p>
      </div>
    </div>
  );
};

export default Register;
