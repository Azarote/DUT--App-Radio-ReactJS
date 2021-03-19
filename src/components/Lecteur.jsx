import React from 'react';

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
           button = <button onClick={ ()=> {this.stop()}} > Pause </button>
        else if (this.state.status === 'loading')
            button = <p>loading</p>;
        else
            button = <button onClick={ ()=> {this.start()}} > Play </button>


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
                            {button}
                        </div>
                }
            </div>
        );
    }
}

export { Lecteur }