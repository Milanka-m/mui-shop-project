import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material' // для настройки своей темы

import './index.css';
import App from './components/App';

// внести изменения в существующей теме
const theme = createTheme({
    palette: {
        primary: {
            main: '#61dafb'
        },
        secondary: {
            main: '#da61bf'
        }
    }
})

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
