import React from 'react';
import { radios } from '../ressources/radios-big.mjs';
import {Tags} from "./Tags.jsx";

class ListeTags extends React.Component{
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <div id="container-tags">
                {( ()=> {
                        var listeTags = [];
                        Object.keys(radios.list).forEach((value,key) => {listeTags.push(<Tags listetags={()=>this.props.listetags(radios.list[key])} radio={radios.list[key]} key={key}/>);
                        })
                        return listeTags;}
                )()}
            </div>
        );
    }
}

export {ListeTags}