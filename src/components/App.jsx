import { Component } from "react";
import { ImageGallery } from "./ImageGallery";
import { Searchbar } from "./Searchbar";
import { Button } from "./styled";

export class App extends Component {

  state = {
    searchImages: '',
    page: 1,
  };

  handleSearch = (searchImages) => {
    this.setState({ searchImages });
  }

  handleMoreLoad = (page) => {
    this.setState({page})
  }



  render() {
  
    return (
    <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
  gridGap: '16px',
  paddingBottom: '24px',
        height: '100vh',
        fontSize: 40,
          color: '#010101'
       
      }}
      >
        <Searchbar handleSearch={ this.handleSearch} />
        <ImageGallery page={this.state.page} searchImages={this.state.searchImages} />
        <Button handleMoreLoad={this.handleMoreLoad} page={this.state.page}>Load More</Button>
    </div>
  );  
  }

  


  
};
