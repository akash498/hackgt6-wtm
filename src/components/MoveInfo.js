import React from 'react';

class MoveInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isShowing: true
        }
    }
    componentDidMount() {
        this.setState({
            isShowing: false,
        })
    }
    closeInfo = () => {
        this.setState({
            isShowing: !this.state.isShowing
        })
    }
    render() {
        return (
            <div>
                <div>Details: </div>
                <button onClick={this.props.handleClose}>Hide</button>
            </div>
        )
    }
}