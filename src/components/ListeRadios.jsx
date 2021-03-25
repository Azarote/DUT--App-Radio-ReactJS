import React from 'react';
import {radios} from '../ressources/radios-big.mjs';
import {Radio} from "./Radio.jsx";

//Composant qui contient la liste des radios
class ListeRadios extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div id="container-listeRadios">
                {( ()=> {
                        let listeRadios = [];
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
