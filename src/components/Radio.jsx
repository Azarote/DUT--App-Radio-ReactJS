import React from 'react';
import fondRadio from '../ressources/images/gplay.png'

class Radio extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const image = require('../ressources/images/'+this.props.radio.img).default;
        return(
            <div onClick={()=>{this.props.updateCurrentRadio()}} className="container-singleRadio" style={{backgroundImage: `url(${fondRadio})`}}>
                <img src={image} alt="image de la radio"/>
                <div className="nom-radio"><abbr title={this.props.radio.name}>{this.props.radio.name}</abbr></div>
            </div>
        )
    }
}

export { Radio }