import React from 'react';

//Icons
import {FaFastForward, FaRegPauseCircle, FaRegPlayCircle} from 'react-icons/fa';

class Lecteur extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.oneTime = false;
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
    returnToDirect(){
        const audio = this.audioRef.current;
        audio.load();
    }
    controlVolume(){
        const audio = this.audioRef.current;
        audio.volume = document.getElementById('rangeVolume').value;
    }
        render() {
        let image = null;
        let tagsRadio = [];
        let button , button2, inputVolume = '';

        //TODO : to fix :
            //audioRef is null at the first radio
        const audio = this.audioRef.current;
            if (audio && !this.oneTime)
            audio.addEventListener('canplaythrough', (event) => {
                this.setState({status: 'playing'})
                this.oneTime = true;
                audio.volume = 0.5;
                event.stopPropagation();
            })
            if (audio && !this.oneTime)
            audio.addEventListener('abort', (event) => {
                this.oneTime = true;
                this.setState({ status: 'loading'})
                event.stopPropagation();
            })

        if (this.props.currentRadio != null) {
            image = require('../ressources/images/' + this.props.currentRadio.img).default;
            this.props.currentRadio.tags.forEach((value) => tagsRadio.push(value));
            let temp = [];
            for (let i = 0; i < tagsRadio.length; i++) {
                temp.push( <div className="tag lecteur-singleTag">{tagsRadio[i]}</div>);
            }
            tagsRadio = temp;
        }

        if (this.state.status === 'playing')
        {
            button = <abbr title="Mettre la radio en pause"><button onClick={ ()=> {this.stop()}} ><FaRegPauseCircle size="2.5em"/></button></abbr>
            button2 = <abbr title="Revenir en direct"><button onClick={ ()=> {this.returnToDirect()}}><FaFastForward size="2em"/></button></abbr>;
            inputVolume = <input type="range" id="rangeVolume" onChange={ ()=> {this.controlVolume()}} min="0" max="1" defaultValue={this.audioRef.current.volume} step="0.01"/>
        }
        else if (this.state.status === 'stopped')
        {
            button = <abbr title="Reprendre la lecture de la radio"><button onClick={ ()=> {this.start()}} ><FaRegPlayCircle size="2.5em"/></button></abbr>
            button2 = <abbr title="Revenir en direct"><button onClick={ ()=> {this.returnToDirect()}}><FaFastForward size="2em"/></button></abbr>;
            inputVolume = <input type="range" id="rangeVolume" onChange={ ()=> {this.controlVolume()}} min="0" max="1" defaultValue={this.audioRef.current.volume} step="0.01"/>

        }
        else
            button = <p>Chargement...</p>;

        return (
            <div id="container-lecteur">
                {
                    this.props.currentRadio == null
                        ? <div id="lecteur-empty">Aucune radio sélectionnée. <audio ref={this.audioRef}/></div>
                        : <div style={{padding: `0 3px 3px`}}>
                            <img src={image} alt="image de la radio"/>
                            <h4>{this.props.currentRadio.name}</h4>
                            <div id="container-controls">
                                <audio src={this.props.currentRadio.url} autoPlay ref={this.audioRef}/>
                                {button}{button2}{inputVolume}
                            </div>
                            {tagsRadio}
                        </div>
                }
            </div>
        );
    }
}

export { Lecteur }
