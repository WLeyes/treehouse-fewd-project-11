// Primary React library import 
import React, { Component } from 'react';

// Runtime type checking for React props and similar objects.
import PropTypes from 'prop-types';

class GalleryListItem extends Component {
  render() {
    console.log(this.props.id);
    return (
      <li>
       <img src={this.props.url} alt="" />
      </li>
    )
  }
}

GalleryListItem.proptypes = {
  photoUrl: PropTypes.string.isRequired
}
export default GalleryListItem;