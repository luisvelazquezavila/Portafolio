import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#014ba0',
    },
    secondary: {
      main: '#005954',
    },
    tertiary: {
      main: '#c501e2',
    },
    quaternary: {
      main: "#fff"
    }
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
       <App />
    </ThemeProvider>
  </React.StrictMode>,
)
