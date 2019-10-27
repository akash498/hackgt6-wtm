import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'
import { updateProfile } from '../store/actions/profileActions'
import axios from 'axios'

class LogIn extends Component {
    state = {

    }

    googleSignIn = (e) => {
        let provider = new firebase.auth.GoogleAuthProvider()


        firebase.auth().signInWithPopup(provider)
        .then( user => {
            this.props.updateAuth(user.user)
            firebase.firestore().collection('users').doc(user.user.uid).get()
            .then(res => {
                // Check if user exists
                if(res.exists) {
                    this.props.updateProfile(res.data())
                }
            })
        })
    }
    // 
    // NEED API KEY!!!!!!!!!
    // 
    firebaseSignIn = (e) => {
        let provider = new firebase.auth.FacebookAuthProvider()

        firebase.auth().signInWithPopup(provider)
        .then( user => {
            this.props.updateAuth(user.user)
            firebase.firestore().collection('users').doc(user.user.uid).get()
            .then(res => {
                // Check if user exists
                if(res.exists) {
                    this.props.updateProfile(res.data())
                }
            })
        })
    }

    render() {
        return (
            <div className="w-full" >
                <button onClick={this.googleSignIn} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline pt-20" type="button">
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
        updateProfile: (profile) => dispatch(updateProfile(profile)),
    }
}

export default connect(null, mapDispatchToProps)(LogIn)