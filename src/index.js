import React,{setGlobal} from 'reactn';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const DEFAULT_GLOBAL_STATE = {
    loggedInUserData : [],
    profileMenuState : false,
    dialogState : false
} 
setGlobal(DEFAULT_GLOBAL_STATE)

ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
