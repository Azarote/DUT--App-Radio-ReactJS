import React from 'react';
import {Tags} from './Tags.jsx';
import {ListeRadios} from './ListeRadios.jsx';
import {Lecteur} from './Lecteur.jsx';

class RadioListener extends React.Component {
    render() {
        return (
            <div id="RadioListener">
                <h1>RadioListener</h1>
                <Tags />
                <ListeRadios />
                <Lecteur />
            </div>
        );
    }
}

export { RadioListener }