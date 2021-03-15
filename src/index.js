import React from 'react';
import ReactDOM from 'react-dom';
//import regeneratorRuntime from "regenerator-runtime";

import body from './index.html';
import './css/style.css';

//Main component
import {RadioListener} from './components/RadioListener.jsx';

document.body.innerHTML=body;
ReactDOM.render(
    <RadioListener />,
    document.getElementById('root')
);