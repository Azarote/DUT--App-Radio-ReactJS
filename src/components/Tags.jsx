import React from 'react';

//Composant qui contient les tags d'une radio
class Tags extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="tag container-singleTag">{this.props.tags}</div>
        );
    }
}

export { Tags }