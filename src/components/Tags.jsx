import React from 'react';


class Tags extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div >
                <div >{this.props.radio.tags}</div>
            </div>
        );
    }
}

export { Tags }