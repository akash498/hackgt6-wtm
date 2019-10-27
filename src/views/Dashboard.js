import React, { Component } from 'react'
import InputMove from '../components/InputMove'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
    console.log(this.props)

        return (
            <div className="container">
                <InputMove>
                </InputMove>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile.profile
    }
}

export default connect(mapStateToProps)(Dashboard)