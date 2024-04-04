
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    EBWidgets?: any;
  }
} 
ReactDOM.createRoot(document.getElementById('root')!).render(

    <App />

)
