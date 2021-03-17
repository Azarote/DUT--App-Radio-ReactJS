import React from 'react';

class Radio extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const image = require('../ressources/images/'+this.props.radio.img).default;
        return(
            <div onClick={()=>{this.props.updateCurrentRadio()}} className="container-singleRadio">
                <img src={image} alt="image de la radio"/>
                <div className="nom-radio">{this.props.radio.name}</div>
            </div>
        )
    }
}

export { Radio }