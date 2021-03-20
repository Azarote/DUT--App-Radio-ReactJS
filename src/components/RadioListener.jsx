import React from 'react';
import {Tags} from './Tags.jsx';
import {ListeRadios} from './ListeRadios.jsx';
import {Lecteur} from './Lecteur.jsx';
import logo from '../ressources/images/logo.png';

class RadioListener extends React.Component {
    constructor(props) {
        super(props);

        this.state = {currentRadio:null}
    }

    updateCurrentRadio(radio){
        this.setState({currentRadio:radio});
    }

    render() {
        return (
            <div id="RadioListener">
                <header>
                    <img id="logo" src={logo} alt={"logo site"}/>
                </header>

                <main>
                    <Tags />
                    <ListeRadios updateCurrentRadio={(radio)=>{this.updateCurrentRadio(radio)}}/>
                    <Lecteur currentRadio={this.state.currentRadio}/>
                </main>

                <footer>
                    <p>© Copyright Mattéo DUFOUR & Matteo MUNOZ</p>
                </footer>
            </div>
        );
    }
}

export { RadioListener }
