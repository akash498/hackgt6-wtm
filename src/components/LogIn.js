import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'
import { updateProfile } from '../store/actions/profileActions'

class LogIn extends Component {
    state = {

    }
    handleSubmit = (e) => {
        this.props.updateProfile({message: 'hey'})
        // let provider = firebase.auth.GoogleAuthProvider()

        // firebase.auth().signInWithPopup(provider)
        // .then( user => {
        //     firebase.firestore().collection('users').doc(user.user.uid).get()
        //     .then(res => {
        //         this.props.updateProfile('hey')
        //     })
        // })
    }
    render() {
        return (
            <div className="w-full max-w-md bg-gray-800" >
              <form onSubmit={this.handleSubmit} className=" bg-white shadow-md rounded px-8 py-8 pt-8">
                <div className="px-4 pb-4">
                  <label htmlFor="email" className="text-sm block font-bold  pb-2">EMAIL ADDRESS</label>
                  <input type="email" name="email" id="" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 " placeholder="Johnbull@example.com"/>
                </div>
                <div  className="px-4 pb-4">
                  <label htmlFor="password" className="text-sm block font-bold pb-2">PASSWORD</label>
                  <input type="password" name="email" id="" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" placeholder="Enter your password"/>
                </div>
                <div>
                <button onClick={this.handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Sign In</button>
                </div>
                </form>
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