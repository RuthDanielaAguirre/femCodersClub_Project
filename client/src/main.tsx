
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
  <GoogleOAuthProvider clientId="208630831814-2om7gu45dvrqti9207do7j1kkfosr9bn.apps.googleusercontent.com">
    <React.StrictMode>
        <App />
      </React.StrictMode>
  </GoogleOAuthProvider>
)
