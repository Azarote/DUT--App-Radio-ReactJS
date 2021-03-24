import React from 'react';
import ReactDOM from 'react-dom';
import fond from './ressources/images/fabric-of-squares.png';

import body from './index.html';
import './css/style.css';

//Main component
import {RadioListener} from './components/RadioListener.jsx';

document.body.innerHTML=body;
document.body.style.backgroundImage = "url(" + fond + ")";

ReactDOM.render(
    <RadioListener />,
    document.getElementById('root')
);