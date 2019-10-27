import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'
import axios from 'axios'

class LogIn extends Component {
    state = {

    }

    stepLearning = (price) => {
        let date = new Date()
        let millitary = date.getHours() + date.getMinutes()

        axios.post('http://127.0.0.1:5000/api/v1.0/initialize', {
            time: millitary,
            price: price
        })
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

export default LogIn