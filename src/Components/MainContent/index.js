// Primary React library import 
import React, { Component } from 'react';

// Runtime type checking for React props and similar objects.
import PropTypes from 'prop-types';

// Axios Component for React with child function callback. This is intended to allow in render async requests.
import axios from 'axios';


// Component imports
import apiKey from '../Config';
import GalleryList from './GalleryList';
import Error404 from '../Error404';

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      loading: true
    };
  }
  
  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'pugs') => {
    // Make a request for a user with a given ID
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=16&page=1&format=json&nojsoncallback=1`)
    
    .then( response => {
      this.setState({ 
        photos: response.data.photos.photo,
        loading: false
      });
    })
    .catch( error => {
      console.log('Error Fetching and parsing data', error);
    });
  }

  render() {
    console.log(this.state.photos)
    return (
      <div className="photo-container">
        <h2>Results</h2>
        <GalleryList photos={this.state.photos} />
        <Error404 />
      </div>
    )
  }
}

export default MainContent;