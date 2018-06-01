// Primary React library import 
import React, { Component } from 'react';

// Runtime type checking for React props and similar objects.
import PropTypes from 'prop-types';

// Axios Component for React with child function callback. This is intended to allow in render async requests.
import axios from 'axios';


// Component imports
import apiKey from '../Config';
import GalleryList from './GalleryList';

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      loading: true,
      query: "pugs"
    };
  }
  
  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'pugs') => {
    // Fetch from Flickr
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=16&page=1&format=json&nojsoncallback=1`)
      .then( response => {
      this.setState({ 
        photos: response.data.photos.photo,
      });
    })
    .catch( error => console.log('Error Fetching and parsing data', error) );
  }
  
  // Render results to page
  render() {
    console.log(this.state.photos);
    return (
      <div className="photo-container">
        <h2>{this.state.query}</h2>
        <GalleryList data={this.state.photos} />
      </div>
    )
  }
}

MainContent.propTypes ={
  query: PropTypes.string.isRequired
}

export default MainContent;