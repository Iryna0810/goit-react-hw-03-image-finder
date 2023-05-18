import { Component } from "react";
import styled from "styled-components";
import { Header, FormWrapper, Button, StyledInput } from "components/styled";

export class Searchbar extends Component {

    state = {
        search: '',
    };

    handleSearchChange = event => {
        console.log(this.state.search);

        this.setState({ search: event.currentTarget.value.toLowerCase() });
    }

    handleSubmit = event => {
        event.preventDefault();
        
        this.setState({search: ''})
    };


    render() {
    
    return(
<Header className="searchbar">
  <FormWrapper onSubmit={this.handleSubmit} className="form">
    <Button type="submit" className="button">
      <span className="button-label">Search</span>
    </Button>

    <StyledInput
      className="input"
      type="text"
      autoComplete="off"
      autoocus="true"
                    placeholder="Search images and photos"
                    onChange={this.handleSearchChange}
    />
        </FormWrapper>
        
    
    </Header>
)
    }
}