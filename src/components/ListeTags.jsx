import React from 'react';
import { radios } from '../ressources/radios-big.mjs';
import {Tags} from "./Tags.jsx";

class ListeTags extends React.Component{
    constructor(props) {
        super(props);
        this.listetags = [];
        radios.list.forEach((value) =>{value.tags.forEach((value1) => {if (this.listetags.indexOf(value1)===-1)this.listetags.push(value1)} )  })

    }

    render(){
        return(
            <div id="container-tags">
                <Tags tags={this.listetags}/>
            </div>
        );
    }
}

export {ListeTags}