import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import TrackerPage from './pages/TrackerPage';
import DataEntryPage from './pages/DataEntryPage';
import './App.scss';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/tracker" element={<TrackerPage />} />
      <Route path="/data-entry" element={<DataEntryPage />} />
    </Routes>
  </Router>
);

export default App;
