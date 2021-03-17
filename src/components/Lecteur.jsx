import React from 'react';

class Lecteur extends React.Component {
    render() {
        var image = null;

        if (this.props.currentRadio != null)
            image = require('../ressources/images/' + this.props.currentRadio.img).default;

        return (
            <div id="container-lecteur">
                {
                    this.props.currentRadio == null
                        ?
                        <div id="lecteur-empty">Aucune radio sélectionnée.</div> :
                        <div id="lecteur-img-h4"><img src={image} alt="image de la radio"/><h4>{this.props.currentRadio.name}</h4></div>
                }
            </div>
        );
    }
}

export { Lecteur }