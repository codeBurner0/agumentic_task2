import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import { Provider } from 'react-redux';
// import { store } from './state/index.ts';
import { BrowserRouter as Router } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')!).render(

    <React.StrictMode>
      <Router >
        <App />
      </Router>
    </React.StrictMode>,
)
