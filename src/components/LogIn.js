import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'
import { updateProfile } from '../store/actions/profileActions'
import {Redirect} from 'react-router-dom'

class LogIn extends Component {
    state = {
        loginSuccess: false,
    }

    googleSignIn = (e) => {
        let provider = new firebase.auth.GoogleAuthProvider()

        firebase.auth().signInWithPopup(provider)
        .then( user => {
            this.setState({loginSuccess: true})
        })
    }
    // 
    // NEED API KEY!!!!!!!!!
    // 
    firebaseSignIn = (e) => {
        let provider = new firebase.auth.FacebookAuthProvider()

        firebase.auth().signInWithPopup(provider)
        .then( user => {
            this.setState({loginSuccess: true})
        })
    }

    render() {
        if (this.state.loginSuccess) {
            return <Redirect to='/inputmove'/>
        }
        return (
            <div className="w-full max-w-md bg-blue-200" >
              <form onSubmit={this.handleSubmit} className=" bg-blue-200  rounded px-8 py-8 pt-8">
                <div className="bg-blue-200 px-4 text-center pb-4">
                  <label htmlFor="email" className="text-xl block text-blue-900 text-center pb-2">Sign in options:</label>
                  <button onClick={this.firebaseSignIn} className="bg-white hover:bg-blue-700 text-center shadow-xl text-black py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">facebook</button>
                </div>
                <div  className="px-4 text-center pb-4">
                  <label htmlFor="password" className="text-lg block text-blue-900 text-center pb-2">or</label>
                  <button onClick={this.googleSignIn} className="bg-white hover:bg-blue-700 text-black text-center shadow-xl py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">gmail</button>
                </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateProfile: (profile) => dispatch(updateProfile(profile)),
    }
}

export default connect(null, mapDispatchToProps)(LogIn)