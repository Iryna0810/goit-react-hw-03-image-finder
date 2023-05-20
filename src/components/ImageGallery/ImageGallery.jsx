import axios from "axios";
import { ImageGalleryItem } from "components/ImageGalleryItem";
import { Component } from "react";
import { List } from '../styled'
import { serchPhoto } from "servises/fetch_img";
// import { nanoid } from "nanoid";

export class ImageGallery extends Component{

    state = {
        searchImages: [],
        isLoading: false,
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('this.props >', this.props)
         if (prevProps.searchImages !== this.props.searchImages) {
                 this.setState({ isLoading: true })
                 serchPhoto(this.props.searchImages)
                     .then(({ data }) => {
                         if (data.status = 'ok') this.setState({ searchImages: data.hits })
                         else throw new Error(data.message);
                     })
                 .catch((error) => {console.log(error.message)})
                 .finally(() => {this.setState({ isLoading: false })}
                 )
             }
         }

render() {
    const { searchImages } = this.state

    return (
        <List className="gallery">
            {searchImages && searchImages.map((image) => <ImageGalleryItem key={image.id} image={image} />)}
        </List>)
}

};

    
