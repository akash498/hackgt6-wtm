import React from 'react';
import axios from 'axios';
import firebase from 'firebase'
import '../components/MoveInfo'

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
        }
    }
    
    componentWillMount() {
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
                    this.setState({
                      restaurant: res.data.businesses[0],
                  })
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
                    this.setState({
                      experience: res.data.businesses[0],
                  })
                })
                .catch((err) => {
                    console.log(err)
                });
            })
        })
        


    }
    seeAnotherMove = () => {

    }
    notTheMove = () => {

    }
    restaurantClick = () => {
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
    return (
      <div>
        <div className="bg-main-pink">
            Restaurant: {this.state.restaurant.name}
            <div>
            {this.state.restaurantShowing &&
                <MoveInfo
                    handleClose={this.restaurantClick}
                />
            }
            </div>
        </div>
        <div>
            Experience: {this.state.experience.name}
            <div>
            {this.state.restaurantShowing &&
                <MoveInfo
                    handleClose={this.experienceClick}
                />
            }
            </div>
        </div>
      </div>
    );
  }
}


