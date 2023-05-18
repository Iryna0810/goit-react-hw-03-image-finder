import { Component } from "react";
import { ImageGallery } from "./ImageGallery";
import { Searchbar } from "./Searchbar";

export class App extends Component {

  state = {
  
  };

  render() {
  
    return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
      >
        <Searchbar/>
        <ImageGallery />
    </div>
  );  
  }

  


  
};
