import React from 'react';
import {radios} from '../ressources/radios-big.mjs';
import {Radio} from "./Radio.jsx";

class ListeRadios extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div id="container-listeRadios">
                {( ()=> {
                        var listeRadios = [];
                        Object.keys(radios.list).forEach((value,key)=>{
                            listeRadios.push(<Radio updateCurrentRadio={()=>this.props.updateCurrentRadio(radios.list[key])} radio={radios.list[key]} key={key}/>);
                        })
                        return listeRadios;
                    }
                )()}
            </div>
        );
    }
}

export { ListeRadios }
