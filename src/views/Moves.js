import React from 'react';
import logo from './logo.svg';
import axios from 'axios';

export default class Moves extends React.Component {
    constructor(props, context) {
        super(props,context);
        this.state = {
            activity: '',
            restaurant: '',
            activityCategory: '',
            restaurantCategory: 'desserts',
            latitude: '',
            longitude: '',
            priceRange: '',
        }
    }
    errorFunction() {
        console.log("erro geting coords")
    }
    successFunction() {
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
    }
    componentWillMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
        }
        else {
            alert("Can't get your location")
        }
        this.getMoveFromYelp();
        if (1) {
            this.setState({priceRange: '1'});
        }
        else {
            this.setState({priceRange: '2,3,4'});
        }
    }
    getMoveFromYelp = () => {
        let restaurantYelpURL = 'https://api.yelp.com/v3/businesses/search';
        
        axios.get(restaurantYelpURL, {
            headers: {
                Authorization: 'Bearer zOgvFpoIJGgLqhvrbNf7ZjfNa4mBe6uO5DfxV-y_sTY6pimI3U_jy3xoRvMIi6ZlUM_DYIKL_HOcI_xlpyu-3UHGQaQJ9NlXWen6Shby2_FMEgZ-r0jd0p2zHI20XXYx',
            },
            params: {
                categories: this.state.restaurantCategory,
                latitude: this.state.latitude,
                longitude: this.state.longitude,
                sort_by: 'rating',
                price: this.state.priceRange
            }    
        })
        .then(
          (res) => {
              console.log(res);
            this.setState({
              restaurant: res.data.businesses[0].name,
          })
        })
        .catch((err) => {
            console.log ('error')
        });
        axios.get(restaurantYelpURL, {
            headers: {
                Authorization: 'Bearer zOgvFpoIJGgLqhvrbNf7ZjfNa4mBe6uO5DfxV-y_sTY6pimI3U_jy3xoRvMIi6ZlUM_DYIKL_HOcI_xlpyu-3UHGQaQJ9NlXWen6Shby2_FMEgZ-r0jd0p2zHI20XXYx',
            },
            params: {
                categories: this.state.activityCategory,
                latitude: this.state.latitude,
                longitude: this.state.longitude,
                sort_by: 'rating',
                price: this.state.priceRange
            }    
        })
        .then(
          (res) => {
              console.log(res);
            this.setState({
              activity: res.data.businesses[0].name,
          })
        })
        .catch((err) => {
            console.log ('error')
        });
      }
    seeActivityInfo = () => {

    }
    seeRestaurantInfo = () => {

    }
    seeAnotherMove = () => {

    }
    notTheMove = () => {

    }
  render() {
    return (
      <div>
        <div className="bg-main-pink">
            Restaurant: {this.state.restaurant}
        </div>
        <div>
            Activity: {this.state.activity}
        </div>
      </div>
    );
  }
}


