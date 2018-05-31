// Primary React library import 
import React, { Component } from 'react';

// Runtime type checking for React props and similar objects.
import PropTypes from 'prop-types';

// Component imports
import GalleryListItem from './GalleryListItem';

class GalleryList extends Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    return (
      <ul>
        { this.props.photos.map(photo =>
        <GalleryListItem 
          key={ photo.id }
          alt=""
          url={ `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg` }
        />)}
      </ul>
    )
  }
}

GalleryList.proptypes = {
  photos: PropTypes.array.isRequired
}

export default GalleryList;