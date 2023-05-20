// import { nanoid } from "nanoid";
import { LiStyled } from '../styled'
import {Modal} from '../Modal/Modal'

import { Component } from "react";

export class ImageGalleryItem extends Component {
  state = {
      showModal: false,
  };
  
   toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
    } 

  render() {
    const { id, webformatURL, largeImageURL } = this.props.image;

    return (
      <>
        {this.state.showModal && (<Modal onCloseModal={this.toggleModal}>
        <img src={largeImageURL} alt="" />
        </Modal>)}
      <LiStyled onClick={this.toggleModal} key={id} className="gallery-item">
        <img src={webformatURL} alt="" />
        </LiStyled>
        </>
    )
  }
};
