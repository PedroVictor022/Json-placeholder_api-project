import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { Global } from './style/Global'
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Global />
    <App />
  </>
)
