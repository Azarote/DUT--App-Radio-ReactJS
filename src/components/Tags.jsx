import React from 'react';


class Tags extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div >
                <div >{this.props.tags}</div>
            </div>
        );
    }
}

export { Tags }