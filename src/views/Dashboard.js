import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
    console.log(this.props)

        return (
            <div className="bg-blue-200 container text-6xl text-blue-900 text-center ">
                <span className="mt-20">WTM</span><span className="text-red-500">?</span>
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