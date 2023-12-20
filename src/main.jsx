import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from '@reduxjs/toolkit'
import store from './redux/store.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  

    <Provider>
    <App store={store} />
    </Provider>
  </React.StrictMode>,
)
