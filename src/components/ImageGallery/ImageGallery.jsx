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
        isVisible: true,
    }

    componentDidUpdate(prevProps, prevState) {


        const { searchImages, currentPage, handleVisible } = this.props;
        if (prevProps.searchImages !== this.props.searchImages) {
            this.setState({ searchImages: [] })
        };

        if (prevProps !== this.props) {
            this.setState({ isLoading: true }) 
            
                serchPhoto(searchImages, currentPage)
                    .then(({ data }) => {    
                        if (data.hits !== [])
                        {
                            this.props.handleVisible(data.hits.length)
                        }
                        this.setState(prevState => {
                            return {
                                searchImages: [...prevState.searchImages, ...data.hits],
                                currentImages: data.hits,
                            }
                        }             
                        )
                    })
                    // .then(()=>{console.log(this.state)})
                     .catch((error) => this.setState({error}))
                     .finally(() => {
                         this.setState({ isLoading: false })
                     }
            )

            
        }

        // if (this.state.currentImages !== []) {
        //     this.props.handleVisible(true);
        // }
  
    }   

    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.state.searchImages.length === nextState.searchImages.length) {
    //         return false;
    //     }
    // }

render() {
    const { searchImages, isLoading, showModal, error, currentImages } = this.state;
    // this.props.handleVisible(currentImages);
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

    
