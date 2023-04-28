import React from 'react';
import ReactDOM from 'react-dom/client';
import { WorkoutContextProvider } from './contexts/WorkoutContext';
import { AuthContextProvider } from './contexts/AuthContext';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <WorkoutContextProvider>
        <App />
      </WorkoutContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

