import React from 'react'
import ReactDOM from 'react-dom/client' //integração do react com a DOM
import { App } from './App'
import "./global.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
