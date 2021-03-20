import React from 'react';

//Icons
import { FaRegPlayCircle } from 'react-icons/fa';
import { FaRegPauseCircle } from 'react-icons/fa';
import { FaFastForward } from 'react-icons/fa';

class Lecteur extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.audioRef = React.createRef();
        this.state = {
            status: 'loading'
        }
    }

    start() {
        const audio = this.audioRef.current;
        audio.play();
        this.setState({status: 'playing'});
    }

    stop() {
        const audio = this.audioRef.current;
        audio.pause();
        this.setState({status: 'stopped'});
    }
        render() {
        let image = null;
        let button = '';
        let button2 = '';

        //TODO : to fix :
            //audioRef is null at the first radio
        const audio = this.audioRef.current;
            if (audio)
            audio.addEventListener('canplaythrough', (event) => {
                this.setState({status: 'playing'})
                event.stopPropagation();
            })
            if (audio)
            audio.addEventListener('abort', (event) => {
                this.setState({ status: 'loading'})
                event.stopPropagation();
            })

        if (this.props.currentRadio != null)
            image = require('../ressources/images/' + this.props.currentRadio.img).default;

        if (this.state.status === 'playing')
        {
            button = <abbr title="Mettre la radio en pause"><button onClick={ ()=> {this.stop()}} ><FaRegPauseCircle size="2.5em"/></button></abbr>
            button2 = <abbr title="Revenir en direct"><button ><FaFastForward size="2em"/></button></abbr>;
        }
        else if (this.state.status === 'stopped')
        {
            button = <abbr title="Reprendre la lecture de la radio"><button onClick={ ()=> {this.start()}} ><FaRegPlayCircle size="2.5em"/></button></abbr>
            button2 = <abbr title="Revenir en direct"><button ><FaFastForward size="2em"/></button></abbr>;
        }
        else
            button = <p>Chargement...</p>;

        return (
            <div id="container-lecteur">
                {
                    this.props.currentRadio == null
                        ? <div id="lecteur-empty">Aucune radio sélectionnée. <audio ref={this.audioRef}/></div>
                        : <div style={{padding: `0 3px`}}>
                            <img src={image} alt="image de la radio"/>
                            <h4>{this.props.currentRadio.name}</h4>
                            <div id="separation"/>
                            <audio src={this.props.currentRadio.url} autoPlay ref={this.audioRef}/>
                            {button}{button2}
                        </div>
                }
            </div>
        );
    }
}

export { Lecteur }