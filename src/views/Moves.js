import React from 'react';
import axios from 'axios';
import firebase from 'firebase'
import MoveInfo from '../components/MoveInfo.js'
import {Redirect} from 'react-router-dom'

export default class Moves extends React.Component {
    constructor(props, context) {
        super(props,context);
        this.state = {
            experience: '',
            restaurant: '',
            experienceCategory: '',
            restaurantCategory: '',
            latitude: '',
            longitude: '',
            priceRange: '',
            restaurantShowing: false,
            experienceShowing: false,
            not_the_move: false,
        }
    }
    
    componentDidMount() {
        // Load the current user's info from firebase
        firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).get()
        .then( user_info => {
            this.setState({restaurantCategory: user_info.data().last_r})
            this.setState({experienceCategory: user_info.data().last_e})

            navigator.geolocation.getCurrentPosition((position) => {
                let YelpURL = `${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search`;

                // Fetch the restaurant data
                axios.get(YelpURL, {
                    headers: {
                        Authorization: 'Bearer zOgvFpoIJGgLqhvrbNf7ZjfNa4mBe6uO5DfxV-y_sTY6pimI3U_jy3xoRvMIi6ZlUM_DYIKL_HOcI_xlpyu-3UHGQaQJ9NlXWen6Shby2_FMEgZ-r0jd0p2zHI20XXYx',
                    },
                    params: {
                        categories: this.state.restaurantCategory,
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        sort_by: 'rating',
                        price: user_info.data().last_s % 2 === 0? '1': '2,3,4'
                    }    
                })
                .then(
                  (res) => {
                    if(res.data.total < 1) {
                        // Fetch the restaurant data
                        axios.get(YelpURL, {
                            headers: {
                                Authorization: 'Bearer zOgvFpoIJGgLqhvrbNf7ZjfNa4mBe6uO5DfxV-y_sTY6pimI3U_jy3xoRvMIi6ZlUM_DYIKL_HOcI_xlpyu-3UHGQaQJ9NlXWen6Shby2_FMEgZ-r0jd0p2zHI20XXYx',
                            },
                            params: {
                                latitude: position.coords.latitude,
                                longitude: position.coords.longitude,
                                sort_by: 'rating',
                                price: user_info.data().last_s % 2 === 0? '1': '2,3,4'
                            }    
                        })
                        .then(
                        (res) => {
                            this.setState({
                            restaurant: res.data.businesses[0],
                        })
                        })
                    }

                    else {
                        this.setState({
                        restaurant: res.data.businesses[0]
                        })
                    }
                })
                .catch((err) => {
                    console.log(err)
                });

                // Fetch the experience data
                axios.get(YelpURL, {
                    headers: {
                        Authorization: 'Bearer zOgvFpoIJGgLqhvrbNf7ZjfNa4mBe6uO5DfxV-y_sTY6pimI3U_jy3xoRvMIi6ZlUM_DYIKL_HOcI_xlpyu-3UHGQaQJ9NlXWen6Shby2_FMEgZ-r0jd0p2zHI20XXYx',
                    },
                    params: {
                        categories: this.state.experienceCategory,
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        sort_by: 'rating',
                        price: user_info.data().last_s % 2 === 0? '1': '2,3,4'
                    }    
                })
                .then(
                  (res) => {
                    if(res.data.total < 1) {
                        // Fetch the restaurant data
                        axios.get(YelpURL, {
                            headers: {
                                Authorization: 'Bearer zOgvFpoIJGgLqhvrbNf7ZjfNa4mBe6uO5DfxV-y_sTY6pimI3U_jy3xoRvMIi6ZlUM_DYIKL_HOcI_xlpyu-3UHGQaQJ9NlXWen6Shby2_FMEgZ-r0jd0p2zHI20XXYx',
                            },
                            params: {
                                latitude: position.coords.latitude,
                                longitude: position.coords.longitude,
                                sort_by: 'rating',
                                price: user_info.data().last_s % 2 === 0? '1': '2,3,4'
                            }    
                        })
                        .then(
                        (res) => {
                            this.setState({
                            experience: res.data.businesses[0],
                        })
                        })
                    }

                    else {
                        this.setState({
                        experience: res.data.businesses[0]
                        })
                    }
                })
                .catch((err) => {
                    console.log(err)
                });
            })
        })
        


    }
    notTheMove = () => {
        this.setState({
            not_the_move: true
        })
    }
    restaurantClick = () => {
        console.log('showing')
        this.setState({
            restaurantShowing: !this.state.restaurantShowing,
        })
    }
    experienceClick = () => {
        this.setState({
            experienceShowing: !this.state.experienceShowing,
        })
    }
  render() {
      if(this.state.not_the_move) {
          return <Redirect to='/inputmove'/>
      }
    return (
        <div className= "text-4xl text-center text-blue-900" >
                <div className= "text-center text-blue-900" >
                    the move is<span className= "text-red-500">...</span>
                </div>
                <button  onClick={this.experienceClick}>
                {this.state.experience.name}
                </button>
                <div>
                {this.state.experienceShowing &&
                    <MoveInfo
                        handleClose={this.experienceClick}
                    />
                }
                </div>

                <div className= "text-center text-blue-900" >
                    and eat<span className= "text-red-500">...</span>
                </div>
                <button onClick={this.restaurantClick}>
                    {this.state.restaurant.name}
                </button>
                <div>
                {this.state.restaurantShowing &&
                    <MoveInfo
                        handleClose={this.restaurantClick}
                    />
                }
                </div>

                this the move<span className= "text-red-500">?</span>
                  <div className="bg-blue-200 w-full g-gray-800" >
                    <button className="bg-white hover:bg-blue-700 text-blue-900 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        yes
                    </button>
                    <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline
                    " type="button" onClick={this.notTheMove}>
                        no
                    </button>
                  </div>
            </div>

    );
  }
}


