
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import React from 'react';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    EBWidgets?: any;
  }
} 
ReactDOM.createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_API_GOOGLE_CLIENT_ID}>
    <React.StrictMode>
        <App />
      </React.StrictMode>
  </GoogleOAuthProvider>
)
