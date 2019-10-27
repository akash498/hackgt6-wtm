import React, { Component } from 'react'
import firebase from 'firebase'
import axios from 'axios'

class InputMove extends Component {
    state = {
        user_exists: false,
        user_info: {},
        satisfaction: 0,
    }

    componentWillMount() {
        firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).get()
        .then(profile_data => {
            if(profile_data.exists) {
                this.state.user_exists = true
                this.state.user_info = profile_data.data()
            }

            else {
                this.state.user_exists = false
            }
        })
    }

    stepLearning = (price) => {
        let date = new Date()
        let millitary = date.getHours() + date.getMinutes()
        
        if(this.state.user_exists) {
            // Use the existing profile data with the API
            axios.post('http://127.0.0.1:5000/api/v1.0/step',
            {
                q_table_e: this.state.user_info.q_table_e,
                q_table_r: this.state.user_info.q_table_r,
                last_s: this.state.user_info.last_s,
                last_e: this.state.user_info.last_e,
                last_r: this.state.user_info.last_r,
                satisfaction: this.state.satisfaction,
                episode: this.state.user_info.episode,
                price: price,
                time: millitary,
            }).then( res => {
                // Update the user with the response
                firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).update({
                    q_table_e: res.data[0].flat(),
                    q_table_r: res.data[1].flat(),
                    last_e: res.data[2],
                    last_r: res.data[3],
                    episode: res.data[4],
                    last_s: res.data[5],                   
                })
            })
        }

        else {
            axios.post('http://127.0.0.1:5000/api/v1.0/initialize', {
                time: millitary,
                price: price
            }).then( res => {
                // Update the user with the response
                firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).set({
                    q_table_e: res.data[0].flat(),
                    q_table_r: res.data[1].flat(),
                    last_e: res.data[2],
                    last_r: res.data[3],
                    episode: res.data[4],
                    last_s: res.data[5],                   
                })
            })
        }
    }

    render() {
        return (
            <div className="w-full g-gray-800" >
                <button onClick={() => this.stepLearning(0)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Budget
                </button>

                or

                <button onClick={() => this.stepLearning(1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Bougie
                </button>
            </div>
        )
    }
}

export default InputMove
