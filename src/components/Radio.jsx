import React from 'react';
import {FaRss} from 'react-icons/fa';

class Radio extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const image = require('../ressources/images/'+this.props.radio.img).default;
        return(
            <div onClick={()=>{this.props.updateCurrentRadio()}} className="container-singleRadio">
                <img src={image} alt="image de la radio"/>
                <abbr title={this.props.radio.name}><div className="nom-radio"><FaRss size="1em"/> {this.props.radio.name}</div></abbr>
            </div>
        )
    }
}

export { Radio }