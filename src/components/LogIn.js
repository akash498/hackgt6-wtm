import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'
import { updateProfile } from '../store/actions/profileActions'

class LogIn extends Component {
    state = {

    }

    googleSignIn = (e) => {
        let provider = new firebase.auth.GoogleAuthProvider()

        firebase.auth().signInWithPopup(provider)
        .then( user => {
            firebase.firestore().collection('users').doc(user.user.uid).get()
            .then(res => {
                this.props.updateProfile('hey')
            })
        })
    }

    firebaseSignIn = (e) => {
        let provider = new firebase.auth.FacebookAuthProvider()

        firebase.auth().signInWithPopup(provider)
        .then( user => {
            firebase.firestore().collection('users').doc(user.user.uid).get()
            .then(res => {
                this.props.updateProfile('hey')
            })
        })
    }

    render() {
        return (
            <div className="w-full g-gray-800" >
                <button onClick={this.googleSignIn} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Sign In With Google
                </button>

                <button onClick={this.facebookSignIn} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Sign In With Facebook
                </button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateProfile: (profile) => dispatch(updateProfile(profile))
    }
}

export default connect(null, mapDispatchToProps)(LogIn)