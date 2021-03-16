import React from 'react';
import {Tags} from './Tags.jsx';
import {ListeRadios} from './ListeRadios.jsx';
import {Lecteur} from './Lecteur.jsx';
import logo from '../ressources/images/logo.png';

class RadioListener extends React.Component {
    render() {
        return (
            <div id="RadioListener">
                <header>
                    <img id="logo" src={logo} />
                </header>

                <main>
                    <Tags />
                    <ListeRadios />
                    <Lecteur />
                </main>

                {/*
                <div id="footer">
                    <p>© Copyright Mattéo DUFOUR & Matteo MUNOZ</p>
                </div>
                */}
            </div>
        );
    }
}

export { RadioListener }