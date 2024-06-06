import React from 'react';
import SignupForm from '../components/SignupForm';
import './SignupPage.scss';

const SignupPage: React.FC = () => (
  <div className="signup-page">
    <h2>Sign Up</h2>
    <SignupForm />
  </div>
);

export default SignupPage;
