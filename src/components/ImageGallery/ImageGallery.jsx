import axios from "axios";
import { ImageGalleryItem } from "components/ImageGalleryItem";
import { Component } from "react";
import {List} from '../styled'

export class ImageGallery extends Component{

    state = {
        images: [],
    }




    render() {
        return (
            <List className="gallery">
                <ImageGalleryItem />
            </List>)
        };
}
    
