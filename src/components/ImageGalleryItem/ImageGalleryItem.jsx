// import { nanoid } from "nanoid";
import {LiStyled} from '../styled'

import { Component } from "react";

export class ImageGalleryItem extends Component {
  state = {
    
  };

  render() {
    const { id, webformatURL, largeImageURL } = this.props.image;
    return (
      <LiStyled key={id} className="gallery-item">
        <img src={webformatURL} alt="" />
      </LiStyled>
    )
  }
};
