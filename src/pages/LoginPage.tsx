import React from 'react';
import LoginForm from '../components/LoginForm';
import './LoginPage.scss';

const LoginPage: React.FC = () => (
  <div className="login-page">
    <h2>Login</h2>
    <LoginForm />
  </div>
);

export default LoginPage;
