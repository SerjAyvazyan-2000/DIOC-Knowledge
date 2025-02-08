import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import {PrimeReactProvider} from 'primereact/api';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <StrictMode>
            <App/>

        </StrictMode>,
    </BrowserRouter>
)
