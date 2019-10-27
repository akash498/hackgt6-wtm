import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
    console.log(this.props)

        return (
            <div className="container">
                Welcome home
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