import { ImageGalleryItem } from "components/ImageGalleryItem";
import { Component } from "react";
import { List } from '../styled'
import { serchPhoto } from "servises/fetch_img";
import { Vortex } from 'react-loader-spinner';

export class ImageGallery extends Component{

    state = {
        searchImages: [],
        currentImages: [],
        isLoading: false,
        error: '',
        currentPage: 1,
    }

    async componentDidUpdate(prevProps, prevState) {
        // console.log('App componentDidUpdate')

        const { searchImages, currentPage } = this.props;
        if (prevProps !== this.props) {
              this.setState({ isLoading: true })           
                await serchPhoto(searchImages, currentPage)
                     .then(({ data }) => {
                        //  console.log(data.hits)
                         this.setState(prevState => {
                             return {
                                 searchImages: [...prevState.searchImages, ...data.hits],
                                 currentImages: data.hits,
                             }
                         }                            
                         )
                     })
                     .catch((error) => this.setState({error}))
                     .finally(() => {
                         this.setState({ isLoading: false })
                     }
                 )
        }

        // if ()
  
    }   

render() {
    const { searchImages, isLoading, showModal, error } = this.state;
    
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
        {error&& <div>Something went wrong. Try again later</div>}
        {searchImages && searchImages.map((image) =>
        <ImageGalleryItem onClick={this.toggleModal} showModal={showModal}  key={image.id} image={image} />       
            )}

        </List>     
            )
    }
    

};

    
