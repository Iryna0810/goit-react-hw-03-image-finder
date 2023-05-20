import { ImageGalleryItem } from "components/ImageGalleryItem";
import { Component } from "react";
import { List } from '../styled'
import { serchPhoto } from "servises/fetch_img";
import { Vortex } from 'react-loader-spinner';

export class ImageGallery extends Component{

    state = {
        searchImages: [],
        isLoading: false,
        error: '',
      
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('this.props >', this.props)
          if (prevProps.searchImages !== this.props.searchImages) {
              this.setState({ isLoading: true })
              
                 serchPhoto(this.props.searchImages)
                     .then(({ data }) => {
                          this.setState({ searchImages: data.hits })
                     })
                 .catch((error) => console.log(error))
                 .finally(() => {this.setState({ isLoading: false })}
                 )
             }
    }
    
     
    

render() {
    const { searchImages, isLoading, showModal } = this.state;
    
    return (
        
<List className="gallery">
    {isLoading && <Vortex
 visible={true}
  height="280"
  width="280"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
            />}
    
            {searchImages && searchImages.map((image) =>
                <ImageGalleryItem onClick={this.toggleModal} showModal={showModal}  key={image.id} image={image} />
               
        )}
        </List>)
}

};

    
