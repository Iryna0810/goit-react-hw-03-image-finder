import { Component } from "react";
import { ImageGallery } from "./ImageGallery";
import { Searchbar } from "./Searchbar";
import { Button } from "./styled";

export class App extends Component {

  state = {
    searchImages: '',
    currentPage: 1,
   };

  handleSearch = (searchImages) => {
    this.setState({ searchImages });
  }

    handleMoreLoad = () => {
    this.setState(prevState => { return { currentPage: prevState.currentPage + 1 }; }
    );
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
        <ImageGallery handleVisible={this.handleVisible} currentPage={this.state.currentPage} searchImages={this.state.searchImages} />
        <Button onClick={this.handleMoreLoad}>Load More</Button>
        
        </div>
  );  
  }  
};

